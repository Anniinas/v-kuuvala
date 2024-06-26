resource "aws_lambda_function" "rest_api" {
  function_name = "rest_api"

  s3_bucket = aws_s3_bucket.backend.bucket
  s3_key    = "${var.deployment_number}/rest_api.zip"

  handler = "index.handler"
  runtime = "nodejs18.x"

  role = aws_iam_role.lambda_rest_api.arn
}

resource "aws_iam_role" "lambda_rest_api" {
  name = "lambda_rest_api"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

}

data "aws_iam_policy" "AWSLambdaBasicExecutionRole" {
  arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "AWSLambdaBasicExecutionRole_to_lambda_rest_api" {
  policy_arn = data.aws_iam_policy.AWSLambdaBasicExecutionRole.arn
  role = aws_iam_role.lambda_rest_api.name
}

resource "aws_iam_policy" "dynamodb_default" {
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:GetItem",
                "dynamodb:Query",
                "dynamodb:GetRecords",
                "dynamodb:Scan"
            ],
            "Resource": [
                "${aws_dynamodb_table.notes.arn}",
                "${aws_dynamodb_table.horses.arn}"
            ]
        }
    ]
}
EOF
}

resource "aws_iam_policy" "image_upload_s3_policy" {
  name        = "ImageUploadS3Policy"
  description = "Allows the user to upload images to an S3 bucket"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowImageUpload",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:ListBucket",
        "s3:GetObject"

      ],
      "Resource": ["${aws_s3_bucket.frontend.arn}/*", "${aws_s3_bucket.frontend.arn}" ]
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "dynamodb_default_to_lambda_rest_api" {
  policy_arn = aws_iam_policy.dynamodb_default.arn
  role = aws_iam_role.lambda_rest_api.name
}

resource "aws_iam_role_policy_attachment" "image_upload_s3_policy_to_lambda_rest_api" {
  policy_arn = aws_iam_policy.image_upload_s3_policy.arn
  role = aws_iam_role.lambda_rest_api.name
}
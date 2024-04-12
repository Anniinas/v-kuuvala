
resource "aws_iam_policy" "ssm_put_parameter_policy" {
  name        = "SSMPutParameterPolicy"
  description = "Policy to allow ssm:PutParameter action"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "ssm:PutParameter",
        Effect = "Allow",
        Resource = "*"
      },
    ]
  })
}

resource "aws_iam_role" "ssm_role" {
  name = "ssmRole"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Service = "ec2.amazonaws.com",
        },
        Action = "sts:AssumeRole",
      },
    ]
  })
}

resource "aws_iam_policy_attachment" "ssm_put_parameter_policy_attachment" {
  name       = "SSMPutParameterPolicyAttachment"
  roles      = [aws_iam_role.ssm_role.name]
  policy_arn = aws_iam_policy.ssm_put_parameter_policy.arn
}

resource "aws_ssm_parameter" "open_AI_API" {
  name        = "/openaiAPI/key"
  description = "API key"
  type        = "SecureString"
  value       = "this-is-testing"

  depends_on = [aws_iam_policy_attachment.ssm_put_parameter_policy_attachment]
}
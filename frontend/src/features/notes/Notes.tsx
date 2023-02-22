import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { createNote, fetchNotes } from "./notesSlice";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";

export const Notes = () => {
  const reduxState = useAppSelector((state) => state);
  const reduxDispatch = useAppDispatch();
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");

  useEffect(() => {
    reduxDispatch(fetchNotes());
  }, [reduxDispatch]);

  return (
    <div>
      {reduxState.notes.errorMessage !== null && (
        <strong>Error: {reduxState.notes.errorMessage}</strong>
      )}
      <h1>Add note</h1>
      <form
        onSubmit={(e) => {
          reduxDispatch(
            createNote({ content: newNoteContent, title: newNoteTitle })
          );
          e.preventDefault();
        }}
      >
        <Form.Label htmlFor="create-server-title">Title</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            id="create-server-title"
            aria-describedby="create-server-title"
            value={newNoteTitle}
            placeholder=""
            onChange={(e) => setNewNoteTitle(e.target.value)}
            type="text"
          />
        </InputGroup>
        <Form.Label htmlFor="create-server-content">Content</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            id="create-server-content"
            aria-describedby="create-server-content"
            value={newNoteContent}
            placeholder=""
            onChange={(e) => setNewNoteContent(e.target.value)}
            type="text"
          />
        </InputGroup>
        <Button
          variant="primary"
          type="submit"
          disabled={newNoteContent.length < 1}
        >
          Add
        </Button>{" "}
      </form>
      <h1>Your notes</h1>
      {reduxState.notes.notes.map((note) => (
        <div>
          <small>id: {note.id}</small>
          <br />
          title: {note.title} <br />
          content: {note.content}
          <hr />
        </div>
      ))}
    </div>
  );
};

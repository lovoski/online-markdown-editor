import "vditor/dist/index.css";
import Vditor from "vditor";
import { useState, useEffect } from "react";

export default function MarkdownEd() {
  const [vd, setVd] = useState();
  useEffect(() => {
    const vditor = new Vditor("vditor", {
      after: () => {
        setVd(vditor);
      },
      toolbar: [
        "emoji",
        "headings",
        "bold",
        "italic",
        "strike",
        "|",
        "line",
        "quote",
        "list",
        "ordered-list",
        "check",
        "outdent",
        "indent",
        "code",
        "inline-code",
        "insert-after",
        "insert-before",
        "undo",
        "redo",
        "upload",
        "link",
        "table",
        "edit-mode",
        "fullscreen",
        "outline",
        "export",
        "br",
      ],
      counter: {
        enable: true,
      },
      cache: {
        enable: true,
      },
      outline: {
        enable: true,
        position: "left",
      },
    });
  }, []);
  return <div id="vditor" className="vditor" />;
}

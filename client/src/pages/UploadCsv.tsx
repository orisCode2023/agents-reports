import React, { useState, ChangeEvent } from "react";

function CsvUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "text/csv") {
      setFile(selected);
      setStatus("");
    } else {
      setStatus("Please select a valid CSV file.");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setStatus("Uploading...");
      const text = await file.text();

      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ csv: text, filename: file.name }),
      });

      if (!response.ok) throw new Error("Upload failed");
      setStatus("Upload successful!");
    } catch (err) {
      setStatus(`Error: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
      <p>{status}</p>
    </div>
  );
}

export default CsvUploader;
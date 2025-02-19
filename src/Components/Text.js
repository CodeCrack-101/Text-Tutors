import React, { useState } from 'react';

export default function Text(props) {
    const [inputText, setInputText] = useState('');

    const handleSubmit = () => {
        console.log("Uppercase was clicked: " + inputText);
        const upperCaseText = inputText.toUpperCase();
        setInputText(upperCaseText);
    };
    const handletoSubmit = () => {
        console.log("Uppercase was clicked: " + inputText);
        const LowercaseText = inputText.toLowerCase();
        setInputText(LowercaseText);
    };
    const handletoClear = () => {
        console.log("Uppercase was clicked: " + inputText);
        const LowercaseText = '';
        setInputText(LowercaseText);
    };

    function handletoDownload(inputText, fileNameToSaveAs, fileType) {
        // Create a Blob with the input text
        const textFileAsBlob = new Blob([inputText], { type: fileType });

        // Create a temporary anchor element
        const downloadLink = document.createElement('a');
        downloadLink.download = fileNameToSaveAs; // Set the file name
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob); // Create a URL for the Blob
        downloadLink.style.display = 'none'; // Hide the link

        // Append the link to the document body
        document.body.appendChild(downloadLink);

        // Programmatically click the link to trigger the download
        downloadLink.click();

        // Remove the link from the document after the download starts
        document.body.removeChild(downloadLink);

        // Revoke the object URL to free up memory
        window.URL.revokeObjectURL(downloadLink.href);
    }

    const handleDownload = () => {
        handletoDownload(inputText, 'khanobaid.txt', 'text/plain');
    };

    function copyToClipboard(text) {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(inputText)
            .then(() => {
                console.log('Text copied to clipboard:', inputText);
                alert('Text copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy text:', err);
                alert('Failed to copy text. Please try again.');
            });
    }

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <>
            <div className="input-container">
                <h1>{props.Heading}</h1>
                <textarea
                    className="input-textarea"
                    placeholder="Type your message here..."
                    value={inputText}
                    onChange={handleChange}
                    rows="4"
                />
                <div className='button-container'>
                    <button className="submit-button" onClick={handleSubmit}>
                        Convert to Uppercase
                    </button>
                    <button className="submit-button" onClick={handletoSubmit}>
                        Convert to Lowercase
                    </button>
                    <button className="submit-button" onClick={handletoClear}>
                        Clear
                    </button>
                    <button className="submit-button" onClick={copyToClipboard}>
                        Copy To ClipBoard
                    </button>
                    <button className="submit-button" onClick={handleDownload}>
                        Download
                    </button>
                </div>
            </div>
            <div className="Text">
                <h2>Your Smmary Is Here</h2>
                <p>{inputText.split(" ").length} Words And {inputText.length} Characters</p>
                <p>{0.008 * inputText.split(" ").length} Minute To Read</p>
                <h2>Preview</h2>
                <p>{inputText}</p>
            </div>
        </>
    );
}
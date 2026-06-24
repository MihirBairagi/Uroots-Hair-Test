"use client";

import { useRef } from "react";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import lotusImage from "@/images/lotus.png";
import scalpPictureImage from "@/images/scalp-picture.png";
import blackArrowIcon from "@/images/black-arrow.png";
import whiteArrowIcon from "@/images/white-arrow.png";

export default function UploadPictureScreen() {
  const uploadInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleOpenPicker = (inputRef) => {
    inputRef.current?.click();
  };

  const handleFileSelection = (event, source) => {
    const [file] = event.target.files ?? [];

    if (!file) {
      return;
    }

    window.sessionStorage.setItem(
      "urootsScalpPicture",
      JSON.stringify({
        name: file.name,
        source,
      }),
    );
  };

  return (
    <section className="screen-gradient-bg question-screen upload-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content upload-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={100}
            questionLabel="Question 10 of 10"
          />

          <div className="question-screen__hero upload-screen__hero">
            <h1 className="question-screen__title upload-screen__title">
              Upload your scalp picture?
            </h1>

             <Image
                            src={lotusImage}
                            alt=""
                            aria-hidden="true"
                            className="question-screen__lotus upload-screen__lotus"
              />
          </div>

          <div className="upload-screen__sample">
            <Image
              src={scalpPictureImage}
              alt="Sample scalp picture"
              className="upload-screen__sample-image"
              priority
            />
          </div>

          <p className="upload-screen__note">
            Try clicking a photo like the sample above
          </p>

          <div className="upload-screen__actions">
            <input
              ref={uploadInputRef}
              type="file"
              accept="image/*"
              className="upload-screen__input"
              onChange={(event) => handleFileSelection(event, "upload")}
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="upload-screen__input"
              onChange={(event) => handleFileSelection(event, "camera")}
            />

            <button
              type="button"
              className="upload-screen__button upload-screen__button--primary"
              onClick={() => handleOpenPicker(uploadInputRef)}
            >
              <span className="upload-screen__button-text">
                Upload scalp photo
              </span>
              <Image
                src={blackArrowIcon}
                alt=""
                aria-hidden="true"
                className="upload-screen__button-arrow"
              />
            </button>

            <button
              type="button"
              className="upload-screen__button upload-screen__button--secondary"
              onClick={() => handleOpenPicker(cameraInputRef)}
            >
              <span className="upload-screen__button-text">Take Picture</span>
              <Image
                src={whiteArrowIcon}
                alt=""
                aria-hidden="true"
                className="upload-screen__button-arrow"
              />
            </button>
          </div>
        </div>

        <div className="question-screen__footer">
          <DoctorCapsule />
        </div>
      </div>
    </section>
  );
}

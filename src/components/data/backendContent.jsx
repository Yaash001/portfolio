
import React from "react";
import mongoLogo from "../../assets/icons/mongodb.png";
import springLogo from "../../assets/icons/spring-boot.png";
import javaLogo from "../../assets/icons/java.png";
import postmanLogo from "../../assets/icons/postman.png";

export const backendFront = (
  <div className="flex gap-4 flex-wrap items-center justify-center">
    <img src={mongoLogo} alt="MongoDB" className="w-12 h-12" />
    <img src={springLogo} alt="Spring Boot" className="w-12 h-12" />
    <img src={javaLogo} alt="Java" className="w-12 h-12" />
    <img src={postmanLogo} alt="Postman" className="w-12 h-12" />
  </div>
);

export const backendBack = (
  <div className="text-center text-white">
    <h2 className="text-xl font-bold mb-2">Backend Learner</h2>
    <p className="text-sm text-gray-200">
      I learn and build secure APIs with Spring Boot, Java, and MongoDB for scalable applications.
    </p>
    <a
      href="https://github.com/Yaash001"
      className="text-blue-400 underline mt-2 inline-block hover:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Backend Projects →
    </a>
  </div>
);

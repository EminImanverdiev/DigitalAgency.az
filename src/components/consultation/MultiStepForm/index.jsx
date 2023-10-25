import { useForm, useStep } from "react-hooks-helper";

import Names from "../steps-form/Names/index";
import Entry from "../steps-form/Entry/index";
import Review from "../steps-form/Review/index";
import Contact from "../steps-form/Contact/index";
import Age from "../steps-form/Age/index";
import Phone from "../steps-form/Phone/index";
import Specif from "../steps-form/Specif/index";
import { useState } from "react";
import WhyUs from "../steps-form/WhyUs/index";
import HowContact from "../steps-form/HowContact/index";
import ContactDate from "../steps-form/ContactDate/index";
import Feedback from "../steps-form/Feedback/index";
import Email from "../steps-form/Email/index";

const defaultData = {
  firstName: "",
  age: "",
  phone: "",
  email: "",
  field: "",
  fieldSpec: "",
  whyUs: "",
  howContact: "",
  dateContact: "",
  feedback: "",
};

const steps = [
  { id: "entry" },
  { id: "names" },
  { id: "age" },
  { id: "phone" },
  { id: "email" },
  { id: "contact" },
  { id: "specif" },
  { id: "whyUs" },
  { id: "howContact" },
  { id: "dateContact" },
  { id: "feedback" },
  { id: "review" },
];

function MultiStepForm() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const [completingPercent, setCompletingPercent] = useState(0);

  const props = {
    formData,
    setForm,
    navigation,
    completingPercent,
    setCompletingPercent,
  };

  switch (step.id) {
    case "entry":
      return <Entry {...props} />;
    case "names":
      return <Names {...props} />;
    case "age":
      return <Age {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "email":
      return <Email {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "specif":
      return <Specif {...props} />;
    case "whyUs":
      return <WhyUs {...props} />;
    case "howContact":
      return <HowContact {...props} />;
    case "dateContact":
      return <ContactDate {...props} />;
    case "feedback":
      return <Feedback {...props} />;
    case "review":
      return <Review {...props} />;
    default:
      return <div>Not Found</div>;
  }
}

export default MultiStepForm;

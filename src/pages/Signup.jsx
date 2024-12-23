import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions in learning to code with SparkEd "
      description1="Build skills for today, tomorrow, and beyond."
      description2="If you have a Spark, nothing can stop you."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
import CustomButton from "../../components/custom-button/custom-button.component";

const ButtonsDisplayPage = () => (
  <div>
    <h3>Buttons Display</h3>
      <CustomButton className="blue-button"> Blue </CustomButton>
      <CustomButton className="black-button"> Black </CustomButton>
      <CustomButton> Nothing </CustomButton>
  </div>
)

export default ButtonsDisplayPage;
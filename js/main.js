// FAQ
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const faqBtn = item.querySelectorAll;

  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    const iconClass = isOpen ? "ri-substract-fill" : "ri-arrow-right-s-line";
    const iconElement = faqBtn.querySelector("i");
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// Validate Email

function isValidEmailAddress(emailAddress) {
  var pattern =
    /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(emailAddress);
}

// Handle Form
const form = document.getElementById("campaign_form");
form.addEventListener("submit", SendCampaign);

async function SendCampaign(e) {
  e.preventDefault();
  const emailVal = $("#contact_email").val();
  const campaignNameVal = $("#campaign_name").val().trim();
  const phoneNumberVal = $("#phone_number").val().trim();
  const descriptionVal = $("#description").val();
  const isValidEmail =  isValidEmailAddress(emailVal)

  console.log(emailVal, "email")
  console.log(campaignNameVal, "campaign")
  console.log(phoneNumberVal, "phone")
  console.log(descriptionVal, "desc")
  console.log(isValidEmail, "valid")


  if (isValidEmail && campaignNameVal !== "" && phoneNumberVal !== "" && descriptionVal !== "") {
    const data = {
      token: "enygma_flgddx",
      data: [
        {
          Custom_Unique_ID: $("#contact_email").val(),
          Campaign_Name: campaignNameVal,
          Maker_Phone_Number: phoneNumberVal,
          Description: descriptionVal,
        },   
      ],
    };
    let headersList = {
      Accept: "/",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "multipart/form-data",
    };

    // let bodyContent = new FormData();
    // bodyContent.append("Location", "-7.96667789514801, 112.68628163937825");
    // bodyContent.append("Description", "hjh");
    // bodyContent.append("Maker_Name", "sbw");
    // bodyContent.append("Maker_Email", "vita@gmail.com");
    // bodyContent.append("Maker_Phone_Number", "124363");
    // bodyContent.append("Status", "123");
    // bodyContent.append("Custom_Unique_ID", "jwj12");
    // bodyContent.append(
    //   "Photo_1",
    //   "/Users/vitaretnama/enygma/asset beneran pintar/beneranpintar_logi.png"
    // );
    // bodyContent.append(
    //   "Photo_2",
    //   "/Users/vitaretnama/enygma/langitnewest/img/mobiair-logo.png"
    // );

    const settings = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headersList,
      redirect: "follow",
    };
    console.log(settings, "test");
    console.log(settings.body, "body");

    try {
      const response = await fetch(
        "http://10.10.10.99:8080/langitwatch/petitions",
        settings
      );
      if (response.ok) {
        const responseObj = await response.json();
        alert(responseObj.message);
        location.reload();
      } else {
        throw new Error("Request Failed");
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.message || "Unexpected error, please try again later.";
      alert(errorMessage);
    }
  } else {
    alert("Your email is not in a valid format");
  }
}

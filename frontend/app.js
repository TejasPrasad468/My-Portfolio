const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const server_url = "https://my-portfolio-gamma-beryl-28.vercel.app";

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

let set_state_input = async function(country_id) {
	document.getElementById("state_id").innerHTML = "";
	let state_input = document.getElementById("state_id");
  await axios.post(`${server_url}/states/states_by_id`, {
  params: { country_id: country_id }
  })
    .then(response => {
      let states = response.data.states;
      for(let i in states) {
        let option = document.createElement("option");
        option.text = states[i].STATE_NAME;
        option.value = states[i].STATE_ID;
        state_input.appendChild(option);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

let setup_server_call = async function() {
  const form_id = document.getElementById("myform");
  const response_id = document.getElementById("response_message");

  document.getElementById('myform').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission
    const form = e.target;
    const formData = new FormData(form); // Create FormData object

    // Convert FormData to JSON object (optional, depends on backend requirements)
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send data using Axios
    await axios.post(`${server_url}/users/saves_form_data`, data)
      .then(response => {
        $("#response_message").text(response.data.message);
        $("#response_message").css("color", "greenyellow");
        $("#response_message").css("visibility", "visible");
        setTimeout(() => {
          $("#response_message").css("visibility", "hidden");
        }, 5000);
        $("#myform")[0].reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
};

let contact_form_init = async function() {
	document.getElementById("country_id").addEventListener("change", function () {
		set_state_input(this.value);
	});

	let country_input = document.getElementById("country_id");

  await axios.get(`${server_url}/countries`)
      .then(response => {
        countries_details = response.data.countries;
      })
      .catch(error => {
        console.error('Error:', error);
      });

	for (let i in countries_details) {
		let option = document.createElement("option");
		option.value = countries_details[i].COUNTRY_ID;
		option.text = countries_details[i].COUNTRY_NAME;
		country_input.appendChild(option);
	}
	document.getElementById("country_id").dispatchEvent(new Event("change"));

  await setup_server_call();
};

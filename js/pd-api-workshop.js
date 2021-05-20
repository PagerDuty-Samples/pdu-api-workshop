const authTab = document.getElementById("auth");

const navMap = {
    "auth-button": "auth"
};

const userTableColumnsMap = {
    "name": "Name",
    "email": "Login/Email",
    "time_zone": "Time Zone",
    "color": "Color",
    "role": "PD Role",
    "job_title": "Job Title",
    "avatar_url": "Avatar URL",
    "description": "Description"
};

const TEAM_NAME = "PDU Workshop Team";
// create a list of teams
const NUMBER_OF_TEAMS = 55;

const showTab = function(tabId) {
    let childrenArray = [...document.getElementById("content").children];
    for (let i = 0; i < childrenArray.length; i++) {
        if (childrenArray[i].id === tabId) {
            childrenArray[i].style.display = "block";
        } else {
            childrenArray[i].style.display = "none";
        }
    }
}

// function for 
const navigateFrom = function(buttonId) {
    showTab(navMap[buttonId]);
}
const buttonList = Object.keys(navMap);
    
// setting the onclick property for each of the nav buttons
buttonList.map(buttonId => {
    // adding click event for nav buttons
    document.getElementById(buttonId).onclick = function() { 
        navigateFrom(buttonId);
        if (buttonId === "users-export-button") {
            populateUsersResult();
        } else if (buttonId === "users-edit-button") {
            populateUsersEdit();
        }
    };
    // todo: add keyevent
});

const initPDJS = function() {
    const parsedToken = JSON.parse(localStorage.getItem("pd-token"));
    return PagerDuty.api({
        token: parsedToken.access_token,
        tokenType: parsedToken.token_type,
        logging: true
    });
}
// pole for pd-token
const authCheckingPoll = function() {
    let checking = window.setInterval(function() {
        if (localStorage.getItem("pd-token")) {
            loadPage();
			initLogoutButton();
			window.history.replaceState({}, document.title, window.location.pathname);
            clearInterval(checking);
        }
    }, 500);
}

// init logout button
const initLogoutButton = function() {
    const authButton = document.getElementById("pd-auth-button");
    authButton.innerText = "Disconnect PagerDuty";
    authButton.href = "#";
    
    // logout of pagerduty
    authButton.onclick = () => {
        localStorage.removeItem('pd-token');
        location.reload();
    }
}

const initRunButton = function() {
	const runButton = document.getElementById("run-button");
	runButton.href = "#";

	runButton.onclick = () => {
		createTestData();
	}
}

// if not pd-token show the auth Tab
const loadPage = function() {
    if (localStorage.getItem("pd-token")) {
        const pd = initPDJS();
        initLogoutButton();
		initRunButton();

		pd.get('/users/me',{})
        .then(({data}) => {
			const regexSubDomain = /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/i;
			const matchSubDomain = data.user.html_url.match(regexSubDomain);
			const subdomain = matchSubDomain[1];

			document.getElementById("user_avatar").src = data.user.avatar_url;
			document.getElementById("user_name").innerHTML = `Name: ${data.user.name}`;
			document.getElementById("user_email").innerHTML = `Email: ${data.user.email}`;
			document.getElementById("user_subdomain").innerHTML = `Subdomain: ${subdomain}`;

			showTab("index");
		})
		.catch(console.error);
    } else {        
        showTab("auth");
        authCheckingPoll();
    }
}
// initialize page
loadPage();

/**********************
 * CREATE TEST DATA
 **********************/
const createTestData = function() {
    const pd = initPDJS();

	for (var i = 0; i < NUMBER_OF_TEAMS; i++) {
		console.log(i)
		pd.post(`/teams`, {
			data: {
				name: `${TEAM_NAME} ${i}`,
				description: `Team created for PDU API Workshop`
			}
		})
		.then(({data}) => {
			let div = document.createElement("div")
			document.getElementById("run-result").append(`${data.team.name} Created.`, div);
		})
		.catch(({data}) => {
			document.getElementById("run-result").append(`PROBLEM: ${data}.`, div);
		})
		
	}
}

/****************************
 * CONFIRM DELETE TEST DATA
 ****************************/
const confirmDeleteTestData = function() {
	document.getElementById("busy").style.display = "block";
    const pd = initPDJS();

	// get all teams
	pd.all('/teams')
  	.then(({resource}) => {
		let teamsToDelete = resource.filter(team => (team.name.startsWith(TEAM_NAME)));

		if (teamsToDelete.length) {
			if (window.confirm(`This will delete ${teamsToDelete.length} teams in your account whose name begin with ${TEAM_NAME}. Are you sure you want to do that?`)) {
				deleteTestData(teamsToDelete);
			}
		} else {
			window.alert("No teams to delete.");
			document.getElementById("busy").style.display = "none";
		}
	})
  	.catch(console.error);
}
/**********************
 * DELETE TEST DATA
 **********************/
const deleteTestData = function(deleteList) {
	const pd = initPDJS();

	deleteList.map((team) => {
		pd.delete(`/teams/${team.id}`)
		.catch(console.error)
	})
	document.getElementById("busy").style.display = "none";
}
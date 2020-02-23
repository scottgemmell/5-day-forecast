async function fetchPosts() {
	const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stirling,UK&units=metric&appid=e9d4c67ad81c4d73f2ad231f6092f6c3")
	const data = await response.json()
	return data
}

function wrapPromise(promise) {
	let status = "pending";
	let result;
	let suspender = promise.then(
		response => {
			status = "success";
			result = response;
		},
		error => {
			status = "error";
			result = error;
		}
	);
	
	return {
		read () {
			console.log('status', status);
			// pending 
			if(status === "pending") throw suspender;
			// rejected
			if(status === "error") throw result;
			// resolve
			if(status === "success") return result;
		}
	}
}

export default function createResource() {
	return {
	  posts: wrapPromise(fetchPosts())
	}
}
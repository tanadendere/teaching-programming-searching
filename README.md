# Searching Algorithms App  Breakdown

The system is contained within a container component:

 - **App Container Component:** This component conditionally renders (displays) one of the following components depending on where the user is:

	 1. **Home Page Component**: This is the first page a user is met with which consists of the topics to be presented and these topics are contained within the following component:
		 **Video Card Component**: This component contains the video for that topic, title as well as a summary of what is to be presented and when clicked this component should then take a user to the Content Page where the main content for the selected lesson is.
	2. ***Content Page Component***: This is the page that is displayed when a user selects a specific topic on the home page. This component consists of two navigation tabs:
		***Topic Content Component***: Video section which contains the video of the lesson for that section as well as a break down below
		***Video Description Component***: Text section with text-based content of that particular topic
	 3.   ***Quiz Component***: This component will consist of the mini-test the learners can complete after each section




***NOTE***: to run the app: ``npm run dev``


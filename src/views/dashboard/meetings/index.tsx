import SidebarLayout from "../../../layouts/sidebar";

const MeetingsPage = () => {

	return (
		<SidebarLayout>
			<form id="destination">
				<input
					id="invitee"
					name="invitee"
					placeholder="Person ID or Email Address or SIP URI or Room ID"
					type="text"
				/>
				<input title="join" type="submit" value="join" />
			</form>

			<div className="flex">
				<video className="w-1/2" id="self-view" muted autoPlay></video>
				<div className="w-1/2">
					<audio id="remote-view-audio" autoPlay></audio>
					<video id="remote-view-video" autoPlay></video>
				</div>
			</div>

			<button id="hangup" title="hangup" type="button">
				cancel/hangup
			</button>

			<script
				crossOrigin=""
				src="https://unpkg.com/webex@^1/umd/webex.min.js"
			></script>
			<script src="./index.js"></script>
		</SidebarLayout>
	);
};

export default MeetingsPage;

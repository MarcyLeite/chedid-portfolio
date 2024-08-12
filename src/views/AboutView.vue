<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import SocialBar from '@/components/SocialBar.vue'
import FormTitle from '@/components/FormTitle.vue'
</script>
<template>
	<div>
		<HeaderComponent></HeaderComponent>
		<div class="content">
			<div class="about-section">
				<div class="profile-wrapper">
					<img src="@/assets/profile.jpg" />
				</div>
				<div class="description-wrapper">
					<div class="description">
						<p>
							Sheridan Animation graduate Jackie Droujko is a professional character
							designer and filmmaker based in Vancouver currently working at Disney
							TVA. Creator of the short film Bang! Bang! and Mismatched, Jackie’s
							passion lies in creating simple and appealing designs that communicate
							compelling stories.
						</p>
						<p>
							Recent design projects include Netflix’s Charlie and the Chocolate
							Factory, Leo, and Arlo the Alligator Boy, Dreamwork’s Cleopatra in
							Space, Nickelodeon’s Monster High, and several more unannounced
							projects.
						</p>
					</div>
					<div class="resume">
						<button class="button rounder">Resume</button>
					</div>
				</div>
			</div>
			<div class="contact-section">
				<div class="contact-wrapper">
					<div class="align-right links-wrapper">
						<div class="email-wrapper">
							<a>
								<strong>exemple@gmail.com</strong>
							</a>
						</div>
						<div class="social-wrapper"><SocialBar></SocialBar></div>
					</div>
					<div class="contact-form">
						<FormTitle text="Name"></FormTitle>
						<div class="name-wrapper">
							<div>
								<FormTitle text="First Name" required></FormTitle>
								<textarea></textarea>
							</div>
							<div>
								<FormTitle text="Last Name" required></FormTitle>
								<textarea></textarea>
							</div>
						</div>
						<div>
							<FormTitle text="Email" required></FormTitle>
							<textarea></textarea>
						</div>
						<div>
							<FormTitle text="Message" required></FormTitle>
							<textarea class="message"></textarea>
						</div>
						<div class="align-right" style="margin: 0.5rem 0">
							<button class="button button-recolor-hover">Send</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about-section {
	margin: 0 2rem;
	padding: 2rem 0;
	font-size: 0.7rem;
	p {
		margin-bottom: 1rem;
	}
	flex-grow: 1;
}
.align-right {
	display: flex;
	align-items: end;
	flex-direction: column;
}
.contact-section {
	padding: 2rem 2rem;
	color: var(--c-primary);
	background-color: var(--c-primary-soft);
	display: flex;
	flex-direction: column;
}

.email-wrapper,
.menu-social-bar-wrapper {
	* {
		transition: color 0.2s ease-in;
	}
	*:hover {
		color: var(--c-black);
	}
}
.description {
	text-align: justify;
	margin: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.resume {
	font-size: 1.5rem;
	display: flex;
	align-items: stretch;
	justify-content: end;
	* {
		flex-grow: 1;
	}
}
.button {
	padding: 0.5rem 2rem;
	border: 2px solid var(--c-button-background);

	color: var(--c-button-background);
	border-radius: 8px;

	transition: all 0.1s ease-out;

	&:hover {
		background-color: var(--c-button-background);
		color: var(--c-button-text);
	}
}
.rounder {
	border-radius: 100px;
}
.profile-wrapper {
	display: flex;
	justify-content: center;
	max-width: 30rem;
	margin: auto;
	img {
		object-fit: cover;
		width: 100%;
		aspect-ratio: 1;
		border-radius: 50%;
	}
}
.contact-form {
	width: 100%;
	flex-grow: 1;
}

textarea {
	margin: 0.5rem 0;
	font-size: 1rem;
}

.name-wrapper {
	margin: 0.5rem 0;
	font-size: 0.6em;
	display: flex;
	gap: 1rem;
	* {
		flex-grow: 1;
	}
}
.message {
	resize: vertical;
	min-height: 10rem;
}

.button-recolor-hover {
	&:hover {
		background-color: transparent;
		border-color: var(--c-black);
		color: var(--c-black);
	}
}
@media only screen and (min-width: 760px) {
	.about-section {
		max-width: 1280px;
		margin: auto;
		display: flex;
		padding: 3rem;
	}
	.description {
		font-size: 0.8rem;
	}
	.button {
		font-size: 1rem;
		max-width: 15rem;
	}
	.contact-section {
		font-size: 1.3rem;
		padding: 3rem;
		.contact-wrapper {
			width: 100%;
			max-width: 1280px;
			margin: auto;
			display: flex;
			flex-direction: column;
		}
	}
	.description-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}
</style>

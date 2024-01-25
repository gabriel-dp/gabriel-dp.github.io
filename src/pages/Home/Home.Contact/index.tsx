import { useForm, SubmitHandler } from "react-hook-form";
import { FaPaperPlane, FaComment, FaFlag } from "react-icons/fa";

import socialConfigs from "@/configs/social.json";
import SectionWrapper from "@/components/layout/SectionWrapper";

import { FormContainer, InputContainer, SubmitButton, TextContainer } from "./styles";

interface ContactData {
	subject: string;
	message: string;
}

const generateMailTo = (subject: string, message: string) =>
	`mailto:${socialConfigs.email}?subject=${subject}&body=${message}`;

export default function HomeContact(props: { $id: string }) {
	const { register, handleSubmit } = useForm<ContactData>();

	const onSubmit: SubmitHandler<ContactData> = (data) => {
		window.open(generateMailTo(data.subject, data.message), "_blank");
	};

	return (
		<SectionWrapper $id={props.$id} title="Contact" sub="Get in touch!">
			<TextContainer>
				<p>You can email me directly at</p>
				<p className="email">{socialConfigs.email}</p>
				<p> or use the tool below.</p>
			</TextContainer>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<input type="text" id="subject" required {...register("subject")} />
					<label htmlFor="subject">
						<FaFlag className="icon" />
						<span>Subject</span>
					</label>
				</InputContainer>
				<InputContainer>
					<textarea id="message" required {...register("message")} />
					<label htmlFor="message">
						<FaComment className="icon" />
						<span>Message</span>
					</label>
				</InputContainer>
				<SubmitButton>
					<span>Send message</span> <FaPaperPlane className="icon" />
				</SubmitButton>
			</FormContainer>
		</SectionWrapper>
	);
}


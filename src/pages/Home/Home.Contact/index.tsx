import { useForm, SubmitHandler } from "react-hook-form";
import { FaPaperPlane, FaComment, FaFlag } from "react-icons/fa";

import socialConfigs from "@/configs/social.json";
import SectionWrapper from "@/components/layout/SectionWrapper";
import useLanguage from "@/contexts/language/useLanguage";

import { FormContainer, InputContainer, SubmitButton, TextContainer } from "./styles";

interface ContactData {
	subject: string;
	message: string;
}

export default function HomeContact(props: { $id: string }) {
	const t = useLanguage();
	const { register, handleSubmit } = useForm<ContactData>();

	const onSubmit: SubmitHandler<ContactData> = (data) => {
		const message = `mailto:${socialConfigs.email}?subject=${data.subject}&body=${data.message}`;
		window.open(message, "_blank");
	};

	return (
		<SectionWrapper $id={props.$id} title={t`sections.contact.title`} sub={t`sections.contact.subtitle`}>
			<TextContainer>
				<p>{t`contact.email-me-at`}</p>
				<p className="email">{socialConfigs.email}</p>
				<p>{t`contact.or-use-tool`}</p>
			</TextContainer>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<input type="text" id="subject" required {...register("subject")} />
					<label htmlFor="subject">
						<FaFlag className="icon" />
						<span>{t`contact.subject`}</span>
					</label>
				</InputContainer>
				<InputContainer>
					<textarea id="message" required {...register("message")} />
					<label htmlFor="message">
						<FaComment className="icon" />
						<span>{t`contact.message`}</span>
					</label>
				</InputContainer>
				<SubmitButton>
					<span>{t`contact.send-button`}</span> <FaPaperPlane className="icon" />
				</SubmitButton>
			</FormContainer>
		</SectionWrapper>
	);
}

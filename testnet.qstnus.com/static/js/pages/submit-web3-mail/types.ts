export enum SubmitWeb3MailTypes {
  BUSINESS = "business",
  USER = "user",
}

export type SubmitWeb3MailProps = {
  profileType: SubmitWeb3MailTypes;
};

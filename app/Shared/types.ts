export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    Classes = 'classes',
    Contact = 'contact',
  }

export interface BenefitTypes {
  icon: JSX.Element,
  title: string,
  desc: string
}
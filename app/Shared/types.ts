export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    Classes = 'classes',
    Contact = 'contact',
    Youtube = 'youtube',
  }

export interface BenefitTypes {
  icon: JSX.Element,
  title: string,
  desc: string
}
export interface ClassType {
  name: string,
  desc: string,
  image: any
}
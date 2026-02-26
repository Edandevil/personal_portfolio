import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import WorkTextSlider from '@/components/work/WorkTextSlider';
import WorkContact from '@/components/work/WorkContact';
import AboutFooter from '@/components/about/AboutFooter';

export default function Contact() {
    return (
        <>
            <div data-elementor-type="wp-page" data-elementor-id="12615" className="elementor elementor-12615">
                <ContactHero />
                <ContactForm />
                <div className="elementor-element elementor-element-8be9725 e-con-full e-flex e-con e-parent"
                    data-id="8be9725" data-element_type="container"
                    data-settings='{"background_background":"classic"}'>
                    <WorkTextSlider />
                    <WorkContact />
                </div>
            </div>
            <AboutFooter />
        </>
    );
}

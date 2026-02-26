import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import BlogContent from '@/components/blog/BlogContent';
import BlogTextSlider from '@/components/blog/BlogTextSlider';
import Footer from '@/components/layout/Footer';

export default function Blog() {
    return (
        <>
            <BlogBreadcrumb />
            <BlogContent />
            <BlogTextSlider />
            <Footer />
        </>
    );
}

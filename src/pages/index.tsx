import DefaultSEO from 'components/DefaultSEO';
import { GetStaticPropsContext } from 'next';
import RenderCMSSections from 'src/components/RenderCMSSections';
import { GET_LANDING_PAGE_QUERY } from 'src/graphql/getHomePageQuery';
import { CMSProvider } from 'src/provider/CMSContext';
import { cmsService } from 'src/service/cmsService';
import { HomeProps } from 'src/types/home.type';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const year = new Date().getFullYear();

  const { data } = await cmsService({
    query: GET_LANDING_PAGE_QUERY({locale}),
  });

  const cmsData = {
    ...data,
    landingPage: {
      ...data.landingPage,
      pageContent: data.landingPage.pageContent.map((item: { componentName: string }) =>
        item.componentName === 'FooterBlockRecord' ? { ...item, year } : item
      ),
    },
  };

  return {
    props: {
      cmsData,
      locale,
    },
  };
};

export default function Home({ cmsData, locale }: HomeProps) {

  return (
    <CMSProvider data={cmsData} locale={locale}>
      <DefaultSEO />
      <RenderCMSSections />
    </CMSProvider>
  );
}

import { fetchMenuItems, fetchTranslations } from "@/utils/fetchTranslations";
import  { langParam } from "@/types/types";
import ClientLandingView from "../view/client-landing-view";

type Props = {
    params: Promise<{ lang: langParam }>
}

export default async function LandingView({ params }: Props) {
    const lang = (await params).lang
    const menuItems = await fetchMenuItems(lang);
    const translations = await fetchTranslations(lang);

    return (
        <ClientLandingView menuItems={menuItems} translations={translations} />
    )
}
import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "../componnets/hero-pattern";
import DashboardHeader from "../componnets/dashboard-header";
import { TextInputPanel } from "../componnets/text-input-panel";
import { QuickActionsPanel } from "../componnets/quick-actions-panel";

export function DashboardView() {
    return (
        <div className="relative">
            <PageHeader title="Dashboard" className="lg:hidden" />
            <HeroPattern />
            <div className="relative space-y-8 p-4 lg:p-16">
                <DashboardHeader />
                <TextInputPanel />
                <QuickActionsPanel />
            </div>
        </div>
    )
}
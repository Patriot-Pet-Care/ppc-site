import Icon from "@/components/Icon";
import type { IconName } from "@/components/IconSprite";
import NotifyButton from "@/components/NotifyButton";

export default function PlaceholderResourceCard({
  name,
  sub,
  icon,
  tone = "t-navy",
}: {
  name: string;
  sub: string;
  icon: IconName;
  tone?: "t-navy" | "t-gold" | "t-red";
}) {
  return (
    <article className="card">
      <div className={`thumb ${tone}`}>
        <span className="ribbon ph">Placeholder</span>
        <Icon name={icon} width={44} height={44} />
      </div>
      <div className="body">
        <p className="cat">{sub}</p>
        <h3>{name}</h3>
        <p className="price">
          <span className="from">Not yet created</span>
        </p>
        <div className="foot">
          <NotifyButton productName={name} />
        </div>
      </div>
    </article>
  );
}

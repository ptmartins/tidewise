import styles from "./page.module.css";
import { Fragment } from "react";
import { Icon } from "@iconify/react";

const WORDS_PER_MINUTE = 220;

// "*Orcinus orca* hunts" -> [<em>Orcinus orca</em>, " hunts"]
export const rich = (text) =>
    text.split(/(\*[^*]+\*)/g).map((part, index) => (
        <Fragment key={index}>{/^\*[^*]+\*$/.test(part) ? <em>{part.slice(1, -1)}</em> : part}</Fragment>
    ));

// Every string in the content, for the reading-time estimate
const collectText = (value) =>
    typeof value === 'string' ? [value] : value && typeof value === 'object' ? Object.values(value).flatMap(collectText) : [];

export const readingMinutes = (content) =>
    Math.max(1, Math.round(collectText(content).join(' ').split(/\s+/).length / WORDS_PER_MINUTE));

export function Block({ block }) {
    if (typeof block === 'string') return <p>{rich(block)}</p>;

    switch (block.type) {
        case 'h3':
            return <h3 className={styles.subheading}>{rich(block.text)}</h3>;

        case 'facts':
            return (
                <dl className={styles.facts}>
                    {block.items.map(({ value, label }) => (
                        <div key={label} className={styles.fact}>
                            <dt>{rich(label)}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            );

        case 'cards':
            return (
                <ul className={styles.cards}>
                    {block.items.map(({ icon, title, text }) => (
                        <li key={title} className={styles.card}>
                            {icon && (
                                <span className={styles.card__icon}>
                                    <Icon icon={icon} width="22" height="22" />
                                </span>
                            )}
                            <h4 className={styles.card__title}>{rich(title)}</h4>
                            <p>{rich(text)}</p>
                        </li>
                    ))}
                </ul>
            );

        case 'timeline':
            return (
                <ol className={styles.timeline}>
                    {block.items.map(({ when, title, text }) => (
                        <li key={title} className={styles.timeline__item}>
                            <span className={styles.timeline__when}>{when}</span>
                            <h4 className={styles.timeline__title}>{rich(title)}</h4>
                            <p>{rich(text)}</p>
                        </li>
                    ))}
                </ol>
            );

        case 'list':
            return (
                <ul className={styles.list}>
                    {block.items.map((item) => <li key={item}>{rich(item)}</li>)}
                </ul>
            );

        case 'callout':
            return (
                <aside className={styles.callout}>
                    <span className={styles.callout__icon}>
                        <Icon icon="lucide:lightbulb" width="22" height="22" />
                    </span>
                    <div>
                        <h4 className={styles.callout__title}>{rich(block.title)}</h4>
                        <p>{rich(block.text)}</p>
                    </div>
                </aside>
            );

        default:
            return null;
    }
}

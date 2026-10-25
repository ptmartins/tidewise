import styles from "./page.module.css";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
import { PortableText, toPlainText } from "next-sanity";

const WORDS_PER_MINUTE = 220;

// Titles, ledes and custom-block fields are plain strings with *asterisks*
// for italics: "*Orcinus orca* hunts" -> [<em>Orcinus orca</em>, " hunts"]
export const rich = (text = '') =>
    text.split(/(\*[^*]+\*)/g).map((part, index) => (
        <Fragment key={index}>{/^\*[^*]+\*$/.test(part) ? <em>{part.slice(1, -1)}</em> : part}</Fragment>
    ));

// Readable strings inside a custom block (skipping _keys, _types and icon names)
const customText = (value) =>
    Array.isArray(value) ? value.flatMap(customText)
        : value && typeof value === 'object' ? Object.entries(value).filter(([key]) => !key.startsWith('_') && key !== 'icon').flatMap(([, v]) => customText(v))
            : typeof value === 'string' ? [value] : [];

// Reading time for one chapter or a list of them
export const readingMinutes = (chapters) => {
    const text = [chapters].flat().flatMap(({ title, lede, body = [] }) => [
        title,
        lede,
        ...body.map((block) => (block._type === 'block' ? toPlainText([block]) : customText(block).join(' '))),
    ]);
    return Math.max(1, Math.round(text.join(' ').split(/\s+/).length / WORDS_PER_MINUTE));
};

const components = {
    block: {
        normal: ({ children }) => <p>{children}</p>,
        h3: ({ children }) => <h3 className={styles.subheading}>{children}</h3>,
    },
    list: {
        bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,
    },
    types: {
        facts: ({ value }) => (
            <dl className={styles.facts}>
                {value.items?.map(({ _key, value: figure, label }) => (
                    <div key={_key} className={styles.fact}>
                        <dt>{rich(label)}</dt>
                        <dd>{figure}</dd>
                    </div>
                ))}
            </dl>
        ),
        cards: ({ value }) => (
            <ul className={styles.cards}>
                {value.items?.map(({ _key, icon, title, text }) => (
                    <li key={_key} className={styles.card}>
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
        ),
        timeline: ({ value }) => (
            <ol className={styles.timeline}>
                {value.items?.map(({ _key, when, title, text }) => (
                    <li key={_key} className={styles.timeline__item}>
                        <span className={styles.timeline__when}>{when}</span>
                        <h4 className={styles.timeline__title}>{rich(title)}</h4>
                        <p>{rich(text)}</p>
                    </li>
                ))}
            </ol>
        ),
        callout: ({ value }) => (
            <aside className={styles.callout}>
                <span className={styles.callout__icon}>
                    <Icon icon="lucide:lightbulb" width="22" height="22" />
                </span>
                <div>
                    <h4 className={styles.callout__title}>{rich(value.title)}</h4>
                    <p>{rich(value.text)}</p>
                </div>
            </aside>
        ),
    },
};

// A chapter body from Sanity (Portable Text plus the custom blocks above)
export function ChapterBody({ value }) {
    return <PortableText value={value} components={components} />;
}

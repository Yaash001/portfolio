import skills from "../data/skills";
import { AnimatedBackground } from "./motion-primitives/animated-background";
import styles from "./Skills.module.scss";

const groups = [
  { id: "languages", title: "Languages", items: skills.languages },
  { id: "frameworks", title: "Frameworks & Libraries", items: skills.frameworks },
  { id: "runtime", title: "Runtime", items: skills.runtime },
  { id: "styling", title: "Styling", items: skills.styling },
  { id: "tools", title: "Tools", items: skills.tools },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <p className={styles.eyebrow}>04 / TOOLKIT</p>
        <h2>
          Skills I <span>work with.</span>
        </h2>
        <p className={styles.intro}>
          Technologies and tools I use to build interfaces and explore
          software and connected systems.
        </p>
      </div>

      <div className={styles.groups}>
        {groups.map((group) => (
          <div className={styles.group} key={group.id}>
            <h3>{group.title}</h3>

            <AnimatedBackground
              enableHover
              className={styles.highlight}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  data-id={`${group.id}-${item}`}
                  className={styles.skill}
                >
                  {item}
                </span>
              ))}
            </AnimatedBackground>
          </div>
        ))}
      </div>
    </section>
  );
}
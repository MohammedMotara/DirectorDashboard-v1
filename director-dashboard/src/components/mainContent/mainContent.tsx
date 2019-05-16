import * as React from "react";
import styles from "./mainContent.module.scss";

export interface IProps {}

export interface IState {}

class MainContent extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.mainContent}>

        <article className={styles.duties}>
          <h1 className={styles.dutiesTitle}> Director Duties</h1>
          <h2 className={styles.section176}> Duty not to accept benefits from third parties (section 176)</h2>

            <p className={styles.dummyData}>
            Section 176 codified the fiduciary rule prohibiting the exploitation
            of the position of director for personal benefit. Under section
            176, directors must not accept any benefit (including a bribe) from
            a third party which is conferred because of his or her being a
            director or doing or not doing anything as a director. “Benefit” is
            not defined. The government stated, during the parliamentary
            debates, that it intended the ordinary dictionary meaning of the
            word, and noted that the Oxford English Dictionary defined it as a
            favourable or helpful factor, circumstance, advantage or profit
            (House of Commons, Company Law Reform Bill [Lords] in Standing
            Committee D, Solicitor-General, column 622).
            </p>

            {/* <p className={styles.dummyData}>
            The duty will not be infringed if the acceptance of the benefit cannot reasonably be
            regarded as likely to give rise to a conflict of interest. Benefits
            conferred by the company, its holding company or subsidiaries, and
            benefits received from a person who provides the director’s services
            to the company, are excluded.
            </p>

            <p className={styles.dummyData}>
            Unlike section 175, board authorisation is not permitted in respect of the acceptance of
            benefits from third parties, but any previous ability of the members
            of a company to authorise the acceptance of benefits that would
            otherwise be a breach of this duty is preserved by section 180(4),
            and the company’s articles may contain provisions for dealing with
            conflicts. Companies may wish to provide in their constitutions that
            where directors accept benefits under a specified value, they will
            not be in breach of their duty to the company, for example to ensure
            that the acceptance of a certain level of corporate hospitality will
            not cause a director to breach section 176.   The duty will continue
            to apply after a person ceases to be a director in relation to
            things done or omitted by them before they ceased to be a director.
            </p> */}

        </article>
      </section>
    );
  }
}

export default MainContent;

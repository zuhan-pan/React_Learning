import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../../data';
import './CoreConcepts.css';
import Section from '../Section';

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(obj => {
          return <CoreConcept key={obj.title} {...obj} />;
        })}
      </ul>
    </Section>
  );
}

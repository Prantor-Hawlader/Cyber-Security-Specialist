"use client";
import React, { useState } from "react";
import { CopyButton } from "react-copy-button";

import { baseMetrics, metricToName } from "../config";
import {
  calculateBaseScore,
  checkSeverity,
  getCVSS31,
  getWeight,
} from "../utils";

const CVSSCalculator = () => {
  const [metrics, setMetrics] = useState({});
  const [metricWeights, setMetricWeights] = useState({});
  const [vector, setVector] = useState(getCVSS31({}));
  const [result, setResult] = useState<any>({
    baseScore: null,
    severity: {
      name: "?",
      bottom: "Not",
      top: "defined",
    },
  });

  const handleChange = (
    metricKey: any,
    metricValue: any,
    metricWeight: any
  ) => {
    const fullKey = (metricToName as any)[metricKey].key;
    const newMetrics = { ...metrics, [fullKey]: metricValue };

    let weight = metricWeight;
    let newMetricWeights = { ...metricWeights, [fullKey]: metricWeight };

    if ("scope" in newMetrics && "privilegeRequired" in newMetrics) {
      weight = getWeight(newMetrics["scope"], newMetrics["privilegeRequired"]);

      newMetricWeights = { ...newMetricWeights, privilegeRequired: weight };
    }

    setMetrics(newMetrics);
    setMetricWeights(newMetricWeights);
    setVector(getCVSS31(newMetrics));

    if (Object.keys(newMetrics).length === Object.keys(metricToName).length) {
      const baseScore = calculateBaseScore(newMetricWeights);
      const severity = checkSeverity(baseScore);

      setResult({ baseScore, severity });
    }
  };

  return (
    <div className="cvssjs">
      {Object.entries(baseMetrics).map(([key, value]) => {
        return (
          <dl key={key} className={key}>
            <dt>{(metricToName as any)[key].value}</dt>
            {value.map((innerValue) => {
              const innerReference = `${key}${innerValue.value}`;
              const htmlForReference = `cvss${innerReference}`;

              return (
                <dd key={innerReference}>
                  <input
                    className={innerReference}
                    id={htmlForReference}
                    name={key}
                    type="radio"
                    value={innerValue.value}
                    onChange={() =>
                      handleChange(key, innerValue.value, innerValue.weight)
                    }
                  />
                  <label htmlFor={htmlForReference}>
                    <i className={innerReference} />
                    {innerValue.label}
                  </label>
                  <small
                    dangerouslySetInnerHTML={{ __html: innerValue.description }}
                  />
                </dd>
              );
            })}
          </dl>
        );
      })}
      <dl>
        <dt>Severity⋅Score⋅Vector</dt>
        <dd>
          <label className="results">
            <span
              className={`${result.severity.name} severity`}
              title={`${result.severity.bottom}-${result.severity.top}`}
            >
              {result.severity.name}
              <sub>
                {result.severity.bottom} - {result.severity.top}
              </sub>
            </span>
            <span className="score">{result.baseScore}</span>
            <a className="vector" href={`#${vector}`}>
              {vector}
            </a>
            <CopyButton className="copy-button" text={vector}>
              Copy
            </CopyButton>
          </label>
        </dd>
      </dl>
    </div>
  );
};

export default CVSSCalculator;

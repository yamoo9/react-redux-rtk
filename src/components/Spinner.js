import { css } from '@emotion/css';

export function Spinner(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={spinnerStyle}
      {...props}
    >
      <defs>
        <filter
          id="ldio-0cjqnugx7e6l-filter"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          <feComponentTransfer result="cutoff">
            <feFuncA type="linear" slope="60" intercept="-40" />
          </feComponentTransfer>
        </filter>
      </defs>
      <g filter="url(#ldio-0cjqnugx7e6l-filter)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="3.7037037037037033s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="0"
              fill="undefined"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.7666666666666666 0 0.6666666666666666 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="1"
              fill="#b3b7e2"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.7333333333333333 0 0.6333333333333333 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="2"
              fill="#b3b7e2"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.7 0 0.6 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="3"
              fill="#d9dbee"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.6666666666666666 0 0.5666666666666667 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="4"
              fill="#d9dbee"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.6333333333333333 0 0.5333333333333333 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="5"
              fill="#d9dbee"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.6 0 0.5 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="6"
              fill="#191d3a"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.5666666666666667 0 0.4666666666666667 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="7"
              fill="#191d3a"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.5333333333333333 0 0.43333333333333335 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="8"
              fill="#191d3a"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.5 0 0.4 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="9"
              fill="#3b4368"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.4666666666666667 0 0.36666666666666664 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="10"
              fill="#3b4368"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.43333333333333335 0 0.3333333333333333 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="11"
              fill="#5e6fa3"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.4 0 0.3 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="12"
              fill="#5e6fa3"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.3666666666666667 0 0.26666666666666666 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="13"
              fill="#5e6fa3"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.33333333333333337 0 0.23333333333333334 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="14"
              fill="#689cc5"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.30000000000000004 0 0.2 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="15"
              fill="#689cc5"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.26666666666666666 0 0.16666666666666666 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="#689cc5"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.23333333333333334 0 0.13333333333333333 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="17"
              fill="#93dbe9"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.2 0 0.1 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="18"
              fill="#93dbe9"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.16666666666666669 0 0.06666666666666667 1"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <g transform="translate(50 18.6)">
            <circle
              cx="0"
              cy="0"
              r="19"
              fill="#93dbe9"
              transform="scale(0.43)"
            />
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.8518518518518516"
            keySplines="0.13333333333333333 0 0.03333333333333333 1"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </svg>
  );
}

const spinnerStyle = css`
  position: fixed;
  top: 40%;
  left: 50%;
  translate: -50% -50%;
`;

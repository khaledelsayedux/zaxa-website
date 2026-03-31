/** @jsxImportSource react */
import svgPaths from './svg-589s7psmlq';

const VB_W = 4096;
const VB_H = 2560;

/**
 * Homepage hero — single vector scene:
 * - One outer <svg> + nested <svg> viewports replace many sibling <svg> roots (fewer documents / layout objects).
 * - Paint order matches the previous Group1 stack: base → panel → full-bleed slice → …
 * - Gradients hoisted into one <defs> (shared ID space, no duplicate parsing).
 */
export default function Svg() {
  return (
    <svg
      className="absolute inset-0 block size-full min-h-full pointer-events-none"
      fill="none"
      preserveAspectRatio="none"
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      overflow="visible"
      aria-hidden
      data-name="svg"
      style={{ contain: 'layout' }}
    >
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1412_121" x1="384" x2="3712" y1="2944" y2="-384">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1412_98" x1="3807.96" x2="1570.57" y1="1020.41" y2="1020.41">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1425_68" x1="111.008" x2="2141.73" y1="673.33" y2="2704.05">
          <stop offset="0.2252" stopColor="#040205" />
          <stop offset="0.2915" stopColor="#040B0D" />
          <stop offset="0.3977" stopColor="#052221" stopOpacity="0.3" />
          <stop offset="0.5305" stopColor="#064843" stopOpacity="0.05" />
          <stop offset="0.6847" stopColor="#087D72" stopOpacity="0.05" />
          <stop offset="0.8547" stopColor="#0BC0AD" stopOpacity="0.05" />
          <stop offset="1" stopColor="#0DFFE5" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1425_68" x1="7.67811" x2="2245.07" y1="1688.69" y2="1688.69">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1412_83" x1="1271.99" x2="3509.45" y1="932.119" y2="932.109">
          <stop stopColor="#0D0D0D" />
          <stop offset="0.3372" stopColor="#080609" />
          <stop offset="1" stopColor="#030104" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1425_88" x1="188.599" x2="2192.21" y1="1063.8" y2="2225.87">
          <stop offset="0.2252" stopColor="#040205" />
          <stop offset="0.2915" stopColor="#040B0D" />
          <stop offset="0.3977" stopColor="#052221" />
          <stop offset="0.5305" stopColor="#064843" stopOpacity="0.05" />
          <stop offset="0.6847" stopColor="#087D72" stopOpacity="0.05" />
          <stop offset="0.8547" stopColor="#0BC0AD" stopOpacity="0.05" />
          <stop offset="1" stopColor="#0DFFE5" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1425_88" x1="125.057" x2="2255.75" y1="1303.05" y2="1986.62">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1412_78" x1="2671.32" x2="433.93" y1="1250.81" y2="1250.81">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1425_73" x1="1383.67" x2="869.561" y1="31.0365" y2="3346.56">
          <stop offset="0.2252" stopColor="#040205" />
          <stop offset="0.2915" stopColor="#040B0D" />
          <stop offset="0.3977" stopColor="#052221" />
          <stop offset="0.5305" stopColor="#064843" stopOpacity="0.05" />
          <stop offset="0.6847" stopColor="#087D72" stopOpacity="0.05" />
          <stop offset="0.8547" stopColor="#0BC0AD" stopOpacity="0.05" />
          <stop offset="1" stopColor="#0DFFE5" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1425_73" x1="7.83851" x2="2245.38" y1="1688.78" y2="1688.81">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1412_88" x1="1989.97" x2="-247.822" y1="1313.68" y2="1313.6">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1425_83" x1="-92.7409" x2="2530.01" y1="2280.24" y2="967.72">
          <stop offset="0.2252" stopColor="#040205" />
          <stop offset="0.2915" stopColor="#040B0D" />
          <stop offset="0.3977" stopColor="#052221" />
          <stop offset="0.5305" stopColor="#064843" stopOpacity="0.05" />
          <stop offset="0.6847" stopColor="#087D72" stopOpacity="0.05" />
          <stop offset="0.8547" stopColor="#0BC0AD" stopOpacity="0.05" />
          <stop offset="1" stopColor="#1DCD9F" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1425_83" x1="178.88" x2="2258.39" y1="1211.09" y2="2036.85">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1412_108" x1="1117.64" x2="-898.398" y1="694.228" y2="1115.39">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1425_78" x1="422.673" x2="1909.98" y1="434.241" y2="2889.94">
          <stop offset="0.2252" stopColor="#040205" />
          <stop offset="0.2915" stopColor="#040B0D" />
          <stop offset="0.3977" stopColor="#052221" />
          <stop offset="0.5305" stopColor="#064843" stopOpacity="0.05" />
          <stop offset="0.6847" stopColor="#087D72" stopOpacity="0.05" />
          <stop offset="0.8547" stopColor="#0BC0AD" stopOpacity="0.05" />
          <stop offset="1" stopColor="#1DCD9F" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1425_78" x1="79.9238" x2="2252.74" y1="1395.27" y2="1928.91">
          <stop stopColor="#030104" />
          <stop offset="0.6628" stopColor="#080609" />
          <stop offset="1" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>

      <path d="M4096 0H0V2560H4096V0Z" fill="url(#paint0_linear_1412_121)" />
      <path d={svgPaths.pe871dc0} fill="url(#paint0_linear_1412_98)" />

      {/* Panel 2 — was inset-[-0.21%_1.82%_-31.72%_43.18%] */}
      <svg
        x={0.4318 * VB_W}
        y={-0.0021 * VB_H}
        width={(1 - 0.4318 - 0.0182) * VB_W}
        height={(1 + 0.0021 + 0.3172) * VB_H}
        viewBox="0 0 2252.75 3377.39"
        preserveAspectRatio="none"
        overflow="hidden"
      >
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.pa48b880} fill="url(#paint0_linear_1425_68)" />
          </g>
          <path d={svgPaths.p26909500} fill="url(#paint1_linear_1425_68)" />
        </g>
      </svg>

      <path d={svgPaths.p1b01100} fill="url(#paint0_linear_1412_83)" />

      {/* Panel 3 */}
      <svg
        x={0.2489 * VB_W}
        y={-0.1004 * VB_H}
        width={(1 - 0.2489 - 0.1699) * VB_W}
        height={(1 + 0.1004 + 0.1846) * VB_H}
        viewBox="0 0 2380.81 3289.67"
        preserveAspectRatio="none"
        overflow="hidden"
      >
        <g id="Group_p3">
          <g id="Group_2_p3">
            <path d={svgPaths.p343f2e80} fill="url(#paint0_linear_1425_88)" />
          </g>
          <path d={svgPaths.p34a53600} fill="url(#paint1_linear_1425_88)" />
        </g>
      </svg>

      <path d={svgPaths.p315e4780} fill="url(#paint0_linear_1412_78)" />

      {/* Panel 4 */}
      <svg
        x={0.0708 * VB_W}
        y={-0.0515 * VB_H}
        width={(1 - 0.0708 - 0.3791) * VB_W}
        height={(1 + 0.0515 + 0.2679) * VB_H}
        viewBox="0 0 2253.24 3377.6"
        preserveAspectRatio="none"
        overflow="hidden"
      >
        <g id="Group_p4">
          <g id="Group_2_p4">
            <path d={svgPaths.p13f891c0} fill="url(#paint0_linear_1425_73)" />
          </g>
          <path d={svgPaths.p716e300} fill="url(#paint1_linear_1425_73)" />
        </g>
      </svg>

      <path d={svgPaths.p3e7e780} fill="url(#paint0_linear_1412_88)" />

      {/* Panel 5 */}
      <svg
        x={-0.1376 * VB_W}
        y={-0.2025 * VB_H}
        width={(1 + 0.1376 - 0.5425) * VB_W}
        height={(1 + 0.2025 + 0.0663) * VB_H}
        viewBox="0 0 2437.26 3247.95"
        preserveAspectRatio="none"
        overflow="hidden"
      >
        <g id="Group_p5">
          <g id="Group_2_p5">
            <path d={svgPaths.p2fcf6500} fill="url(#paint0_linear_1425_83)" />
          </g>
          <path d={svgPaths.p114ed600} fill="url(#paint1_linear_1425_83)" />
        </g>
      </svg>

      <path d={svgPaths.p3557f780} fill="url(#paint0_linear_1412_108)" />

      {/* Panel 6 */}
      <svg
        x={-0.3453 * VB_W}
        y={-0.0631 * VB_H}
        width={(1 + 0.3453 - 0.7758) * VB_W}
        height={(1 + 0.0631 + 0.2355) * VB_H}
        viewBox="0 0 2332.66 3324.18"
        preserveAspectRatio="none"
        overflow="hidden"
      >
        <g id="Group_p6">
          <g id="Group_2_p6">
            <path d={svgPaths.p2f0ddf00} fill="url(#paint0_linear_1425_78)" />
          </g>
          <path d={svgPaths.p2811f080} fill="url(#paint1_linear_1425_78)" />
        </g>
      </svg>
    </svg>
  );
}

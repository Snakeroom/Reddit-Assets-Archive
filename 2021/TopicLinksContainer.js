// https://www.redditstatic.com/desktop2x/TopicLinksContainer.616db823a83eb05bf483.js
// Retrieved at 9/15/2021, 5:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopicLinksContainer"], {
		"./src/reddit/components/IdCard/TopicLinksContainer/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2JU2WQDzn5pAlpxqChbxr7",
				tagIcon: "_2JU2WQDzn5pAlpxqChbxr7",
				TopicsContainer: "_3E45je-29yDjfFqFcLCXyH",
				topicsContainer: "_3E45je-29yDjfFqFcLCXyH",
				TopicListHeader: "_13YtS_rCnVZG1ns2xaCalg",
				topicListHeader: "_13YtS_rCnVZG1ns2xaCalg",
				TopicList: "_1m5fPZN4q3vKVg9SgU43u2",
				topicList: "_1m5fPZN4q3vKVg9SgU43u2",
				TopicLiElement: "_17A-IdW3j1_fI_pN-8tMV-",
				topicLiElement: "_17A-IdW3j1_fI_pN-8tMV-",
				TopicLink: "_5MIPBF8A9vXwwXFumpGqY",
				topicLink: "_5MIPBF8A9vXwwXFumpGqY"
			}
		},
		"./src/reddit/components/IdCard/TopicLinksContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				_ = s("./src/reddit/selectors/seo/topicLinks.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/components/IdCard/TopicLinksContainer/index.m.less"),
				C = s.n(L);
			const x = Object(r.c)({
					subreddit: u.Q,
					topicLinks: _.a
				}),
				g = Object(a.b)(x),
				k = ({
					topicName: e,
					slug: t
				}) => {
					const s = Object(o.b)(),
						n = Object(i.useCallback)(() => s((e => t => ({
							...p.defaults(t),
							action: l.c.CLICK,
							noun: "link",
							source: "subreddit_topic_link",
							banner: {
								id: "link",
								buttonText: e
							}
						}))(e)), [s, e]);
					return c.a.createElement("li", {
						className: C.a.TopicLiElement
					}, c.a.createElement(d.s, {
						className: C.a.TopicLink,
						kind: d.a.InternalLink,
						onClick: n,
						to: `/t/${t}/`
					}, e))
				};
			t.default = g(({
				subreddit: e,
				topicLinks: t
			}) => t && t.length ? c.a.createElement("div", {
				className: C.a.TopicsContainer
			}, c.a.createElement("div", {
				className: C.a.TopicListHeader
			}, c.a.createElement(m.a, {
				className: C.a.TagIcon,
				key: "tag"
			}), `${e.displayText} ${n.fbt._("topics",null,{hk:"2BYU7m"})}`), c.a.createElement("div", {
				className: C.a.TopicList
			}, c.a.createElement("ul", null, t.map(({
				name: e,
				slug: t
			}) => c.a.createElement(k, {
				key: e,
				topicName: e,
				slug: t
			}))))) : null)
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopicLinksContainer.616db823a83eb05bf483.js.map
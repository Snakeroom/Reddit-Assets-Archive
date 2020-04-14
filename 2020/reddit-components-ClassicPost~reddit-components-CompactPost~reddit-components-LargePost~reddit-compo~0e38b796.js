// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.256f5262a9893b7cfe7c.js
// Retrieved at 4/14/2020, 2:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = b(o.target, o.currentTarget);
					p(o.target, o.currentTarget, m.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(i.previousPageActionInfo)(e)
					})), p(o.target, o.currentTarget, m.anchorsAndButtons) && n(o)
				}
			});

			function u(e) {
				class t extends c.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return c.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, n)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const m = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				p = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && p(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				i = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return o.a.createElement(c.a, d({
					className: Object(r.a)(t, i.a.CallToActionButton, {
						[i.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: a
				} = e;
				if (!Object(u.a)(a)) return null;
				const m = a && a.eventInfo,
					x = Object(l.a)(a),
					f = m && Object(c.c)(m.eventStart, m.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(i.a, {
					language: n,
					post: a
				}), !x && f && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: a,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				c = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				a = s("./src/lib/constants/index.ts");

			function i(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = s("./src/reddit/icons/fonts/Live/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = s.n(m),
				b = s("./src/lib/lessComponent.tsx");
			const x = b.a.span("PostEventFutureText", p.a),
				f = b.a.span("PostEventPastText", p.a),
				v = b.a.span("PostEventNowText", p.a),
				h = b.a.span("Container", p.a),
				k = b.a.wrapped(l.a, "CalendarIcon", p.a),
				g = b.a.wrapped(u.a, "LiveIcon", p.a),
				E = b.a.div("LoadingState", p.a);
			class O extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: u,
						eventStart: m
					} = n, p = Object(r.e)(m, l);
					let b, O;
					if (this.state.mounted || p === r.a.Live) b = function(e, t, s, n) {
						const o = Object(r.e)(e, t),
							d = new Date(e * a.Db);
						let l;
						if (o === r.a.Live || n) return Object(c.a)(s, "posts.event.inProgress");
						o === r.a.Future ? l = Object(r.d)(e) ? Object(c.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? i(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : o === r.a.Past && (l = Object(r.d)(e) ? Object(c.a)(s, "posts.event.today") : i(d, s));
						const u = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(u)
					}(m, l, t, u);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						b = o.a.createElement(E, {
							className: e
						})
					}
					if (u) O = o.a.createElement(v, null, o.a.createElement(g, null), b);
					else if (p === r.a.Future) O = o.a.createElement(x, null, o.a.createElement(k, null), b);
					else {
						if (p !== r.a.Past) return null;
						O = o.a.createElement(f, null, o.a.createElement(k, null), b)
					}
					return o.a.createElement(h, {
						className: e
					}, O)
				}
			}
			t.a = O
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModModeReports/index.m.less"),
				i = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = c.a.div("Text", i.a), u = c.a.div("Placeholder", i.a), m = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				u = s("./src/reddit/components/Popup/Button.tsx"),
				m = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: x
				} = e, [f, v] = Object(o.useState)(!0), h = Object(b.b)(s.id, x), k = Object(c.c)(), g = Object(p.a)(), E = Object(b.a)(s, x), O = (e, n) => g(Object(m.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					E && O("modal", "show")
				}, [E]);
				if (!E || !f) return null;
				const j = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: h,
					title: j,
					onClose: () => {
						v(!1), O("close", "click"), k(Object(i.G)()), k(Object(i.R)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						k(Object(i.G)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(a.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(u.a, {
					onClick: () => (v(!1), O("report", "click"), void k(Object(d.j)(s.id)))
				}, n.fbt._("Report", null, {
					hk: "3M0Eii"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				u = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function f(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: f
				} = e, [v, h] = Object(r.useState)(n.Survey), k = Object(x.b)(s.id, f), g = Object(a.c)(), E = Object(b.a)(), O = Object(x.a)(s, f), j = (e, n) => E(Object(p.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					O && j("modal", "show")
				}, [O]);
				const y = e => {
					h(n.Closed), j("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), g(Object(l.j)(s.id, void 0, void 0, e))
				};
				if (!O) return null;
				let _ = null;
				const C = {
					id: k,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						h(n.Closed), j("close", "click"), g(Object(d.G)())
					},
					onClickOutside: () => {
						g(Object(d.G)())
					}
				};
				switch (v) {
					case n.Survey:
						_ = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(n.OffTopic), j("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(n.DontLike), j("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(n.BreaksRules), j("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						_ = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						_ = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						_ = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", c.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", c.a.createElement(i.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), c.a.createElement(m.a, {
							onClick: () => y("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), c.a.createElement(m.a, {
							onClick: () => y("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return _
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Popup/index.m.less"),
				c = s.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: c.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, s) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				c = s.n(r);
			var a = s("./src/reddit/components/Popup/index.m.less"),
				i = s.n(a);

			function d(e) {
				const {
					id: t = c()(),
					onClose: s,
					onClickOutside: r,
					title: a,
					children: d
				} = e;
				return function(e, t) {
					const s = Object(n.useCallback)(s => {
						if (!t) return;
						const n = document.getElementById(e);
						n && (n.contains(s.target) || t(s))
					}, [e, t]);
					Object(n.useEffect)(() => {
						if (t) return document.body.addEventListener("click", s), () => {
							document.body.removeEventListener("click", s)
						}
					}, [t, s])
				}(t, r), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: i.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: i.a.header
				}, o.a.createElement("span", {
					className: i.a.title
				}, a), o.a.createElement("button", {
					className: i.a.closeButton,
					onClick: s
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				i = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(c.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: c,
					post: i,
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: c
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				O = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = s("./src/reddit/icons/fonts/Report/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				w = s("./src/reddit/components/PostBadges/index.m.less"),
				I = s.n(w);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => r.a.createElement("span", M({
					className: I.a.removalReason
				}, e), e.children),
				N = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				T = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				F = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				B = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				A = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				R = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				H = Object(b.t)({
					isProfilePostListing: b.H,
					isSubreddit: b.J,
					pageLayer: e => e
				}),
				V = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(k.t)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.O
				}),
				W = Object(c.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = H(W(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: c,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: k,
					language: w,
					modModeEnabled: H,
					onHideTooltip: V,
					onOpenRemovalReasonModal: W,
					onShowTooltip: D,
					post: G,
					tooltipType: z
				} = e;
				const U = {
						caretOnTop: !1
					},
					Z = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === p.a.SUBREDDIT,
					X = R("Approve", G.id, z),
					J = R("Archived", G.id, z),
					K = R("Automod", G.id, z),
					q = R("Lock", G.id, z),
					Y = R("Mod", G.id, z),
					Q = R("Remove", G.id, z),
					$ = R("Report", G.id, z),
					ee = R("Spam", G.id, z),
					te = R("Sticky", G.id, z),
					se = R("Pinned", G.id, z);
				return r.a.createElement("div", {
					className: t
				}, a && s && G.distinguishType === d.B.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					className: I.a.modIcon,
					desc: F(s),
					id: Y,
					onMouseEnter: D(Y),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: Y,
					text: F(s)
				}, U))), G.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: I.a.archivedIcon,
					desc: N(),
					id: J,
					onMouseEnter: D(J),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: J,
					text: N()
				}, U))), G.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: I.a.lockIcon,
					desc: T(),
					id: q,
					onMouseEnter: D(q),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: q,
					text: T()
				}, U))), c && Object(h.k)(G) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: I.a.stickyIcon,
					desc: B(),
					id: te,
					onMouseEnter: D(te),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: te,
					text: B()
				}, U))), k && b && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: I.a.stickyIcon,
					desc: A(),
					id: se,
					onMouseEnter: D(se),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: se,
					text: A()
				}, U))), (G.isApproved || G.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					className: I.a.approveIcon,
					desc: Object(f.a)(G),
					id: X,
					onMouseEnter: D(X),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: X,
					text: Object(f.a)(G)
				}, U))), Object(x.a)(G) && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: I.a.removeIcon,
					desc: Object(f.c)(G),
					id: Q,
					onMouseEnter: D(Q),
					onMouseLeave: V
				}), Z && r.a.createElement(m.a, {
					className: I.a.addRemovalReason,
					onClick: W,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (G.modRemovalReason || G.modNote) && r.a.createElement(L, {
					onMouseEnter: D(Q),
					onMouseLeave: V
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, M({
					tooltipId: Q,
					text: Object(f.c)(G)
				}, U))), G.bannedBy && G.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: I.a.spamIcon,
					desc: Object(f.e)(w, G),
					id: ee,
					onMouseEnter: D(ee),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: ee,
					text: Object(f.e)(w, G)
				}, U))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					className: Object(i.a)(I.a.automoderator, !!G.bannedBy && I.a.isRemoved),
					desc: f.b,
					id: K,
					onMouseEnter: D(K),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: K,
					text: f.b
				}, U))), Object(v.a)(G) && !H && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: I.a.reportIcon,
					desc: Object(f.d)(G.numReports),
					id: $,
					onMouseEnter: D($),
					onMouseLeave: V
				}), r.a.createElement(u.c, M({
					tooltipId: $,
					text: Object(f.d)(G.numReports)
				}, U))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				i = s("./src/reddit/components/GildModal/Loader.tsx"),
				d = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/gild.ts"),
				m = s("./src/reddit/selectors/video.ts"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				x = s("./src/reddit/components/PostContainer/index.m.less"),
				f = s.n(x);
			const v = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.a)(e, {
							postId: s.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: s,
							post: n
						} = t;
						const o = Object(a.b)(n.postId, s);
						return Object(u.c)(e, o)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.e)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.c)(e, {
							postId: s.id
						})
					}
				}),
				h = Object(d.a)(v),
				k = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						afterClickTracking: s,
						buffering: n,
						children: r,
						className: a,
						continuousViewingStartedAt: d,
						gildModalIsOpen: u,
						makePostContainerId: m,
						playing: b,
						post: x,
						onClick: v,
						onPostContentClick: h,
						onPostViewable: g,
						style: E,
						ref: O
					} = this.props, j = o.a.createElement("div", {
						style: E,
						ref: O,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: e => {
							!this.cancelClick && e.button < 2 && (s(() => v && v(e, x))(e), h && k(e) && h(e, x))
						},
						className: Object(p.a)(f.a.WrappedPost, a, "Post ".concat(x.id), {
							promotedlink: x.isSponsored
						}),
						id: m ? m(x.id) : x.id,
						tabIndex: -1
					}, r, u && o.a.createElement(i.a, null)), y = !!x.media && x.media.type === l.n.VIDEO;
					return x.isSponsored || y ? o.a.createElement(c.a, {
						onViewable: e => g(x, e),
						pixelPostHasEnteredView: t => e(x, t),
						pixelPostHasExitedView: e => t(x, e),
						trackVideoMetrics: y && !n && b,
						continuousViewingStartedAt: d
					}, j) : j
				}
			}
			t.a = h(Object(b.c)(g))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(u.o)({
							postId: s,
							isFollowed: r
						}) : Object(u.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, r = s.isFollowed;
					let c = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && n && (c = "collection.follow.unfollow"), o.a.createElement("button", {
						className: Object(a.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, o.a.createElement(l.a, {
						msgId: c
					}))
				}
			}
			const x = Object(r.b)(() => Object(c.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(i.C)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.c)(b))
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(i.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: i,
					isSponsored: d
				} = s;
				return i ? o.a.createElement(p, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: i.url,
					isSponsored: d,
					postId: s.id,
					source: i
				}, Object(c.a)(s), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				m = s.n(u),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = f(e, ["small", "shouldReverseColor"]);
					const r = s ? a.i : a.f;
					return o.a.createElement(r, x({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", m.a),
				h = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = f(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = n ? a.f : a.i;
					return o.a.createElement(c, x({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", m.a),
				k = b.a.wrapped(i.a, "Checkmark", m.a),
				g = b.a.wrapped(d.a, "Plus", m.a),
				E = b.a.div("ButtonSpacer", m.a);
			class O extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: n,
							onSubscribe: r,
							onUnsubscribe: c,
							postId: a,
							sendEvent: i,
							small: d = !1,
							userIsSubscriber: u,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: O,
							onSubscriptionsRequested: j
						} = e,
						y = f(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let C = u ? "subscribed" : "subscribe";
					u && _ && (C = "unsubscribe");
					const S = Object(l.a)({
						type: s.type,
						key: C
					});
					return u ? this.state.hasJustSubscribed || b ? o.a.createElement(h, x({
						className: Object(p.a)(t, {
							[m.a.isLarge]: !d,
							[m.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, y), d && o.a.createElement(k, null), !d && !_ && o.a.createElement(k, null), !d && S) : d ? null : o.a.createElement(E, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v, x({
						className: Object(p.a)(t, {
							[m.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, y, {
						id: "subscribe-button-".concat(a),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(g, null), !d && S))
				}
			}
			t.a = Object(c.a)(Object(r.c)(O))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				c = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[o({
						type: t
					})][s]()
				}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				c = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				language: a.O,
				userIsSubscriber: c.Z
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var i = e => o.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: c,
						"data-redditstyle": a
					} = t, i = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? u.a.mDisabledRedditStyle : u.a.mDisabled : n ? u.a.mActiveRedditStyle : u.a.mActive
					})(n, c, a);
					return o.a.createElement(e, m({
						className: Object(r.a)(u.a.Checkbox, d, s)
					}, i))
				},
				x = b(d.a),
				f = b(i);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? x : c.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(u.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				c = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(a.g)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(o.a)(e), c.a.actionIcon, c.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o) => r => ({
					source: "report_prompt",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				}),
				r = (e, t, s, o) => r => ({
					source: "report_survey",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				})
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(c);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = i
		}
	}
]);
//# sourceMappingURL=reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.256f5262a9893b7cfe7c.js.map
// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.142a954c2c2482decfdb.js
// Retrieved at 8/31/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const u = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = f(o.target, o.currentTarget);
					b(o.target, o.currentTarget, p.anchors) ? r && t && e(t(n, r)) : r && t && e(e => {
						const s = t(n, r)(e);
						let o;
						if (s && s.actionInfo) {
							const e = s.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, s), {
							actionInfo: Object(i.previousPageActionInfo)(e, o)
						})
					}), b(o.target, o.currentTarget, p.anchorsAndButtons) && s(o)
				}
			});

			function m(e) {
				class t extends c.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: n,
							clickTrackingId: s
						} = this.props;
						return c.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: u(t, n, s)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				b = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && b(e.parentElement, t, n)),
				f = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && f(e.parentElement, t))
				}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(s);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(i);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: i,
					callToAction: l,
					caption: u
				} = t;
				if (!i || !i.url) return null;
				let m = i.displayText;
				return i.displayText.length >= 40 && (m = i.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: i.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: i,
					className: d.a.displayUrl
				}, m)), l && r.a.createElement(c.a, {
					className: d.a.callToAction,
					href: i.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: i
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				i = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			t.a = e => {
				var {
					className: t
				} = e, n = l(e, ["className"]);
				return o.a.createElement(c.a, d({
					className: Object(r.a)(t, i.a.CallToActionButton, {
						[i.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				m = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: s
				} = e;
				if (!Object(u.a)(s)) return null;
				const a = s && s.eventInfo,
					m = Object(l.a)(s),
					f = a && Object(c.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!n
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(i.a, {
					post: s
				}), !m && f && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				c = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				a = n("./src/lib/constants/index.ts");

			function i(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = n("./src/reddit/icons/fonts/Live/index.tsx"),
				m = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = n.n(m),
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.span("PostEventFutureText", p.a),
				x = b.a.span("PostEventPastText", p.a),
				v = b.a.span("PostEventNowText", p.a),
				h = b.a.span("Container", p.a),
				k = b.a.wrapped(l.a, "CalendarIcon", p.a),
				y = b.a.wrapped(u.a, "LiveIcon", p.a),
				E = b.a.div("LoadingState", p.a);
			class _ extends s.Component {
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
						post: t
					} = this.props, {
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: l,
						eventStart: u
					} = n, m = Object(r.e)(u, s);
					let p, b;
					if (this.state.mounted || m === r.a.Live) p = function(e, t, n) {
						const s = Object(r.e)(e, t),
							o = new Date(e * a.Fb);
						let d;
						if (s === r.a.Live || n) return c.fbt._("Now", null, {
							hk: "Prpcg"
						});
						s === r.a.Future ? d = Object(r.d)(e) ? c.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? i(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : s === r.a.Past && (d = Object(r.d)(e) ? c.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : i(o));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(o);
						return "".concat(d, " @ ").concat(l)
					}(u, s, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = o.a.createElement(E, {
							className: e
						})
					}
					if (l) b = o.a.createElement(v, null, o.a.createElement(y, null), p);
					else if (m === r.a.Future) b = o.a.createElement(f, null, o.a.createElement(k, null), p);
					else {
						if (m !== r.a.Past) return null;
						b = o.a.createElement(x, null, o.a.createElement(k, null), p)
					}
					return o.a.createElement(h, {
						className: e
					}, b)
				}
			}
			t.a = _
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				i = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = c.a.div("Text", i.a), u = c.a.div("Placeholder", i.a), m = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(s.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				m = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function f(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: f
				} = e, [x, v] = Object(o.useState)(!0), h = Object(b.b)(n.id, f), k = Object(c.c)(), y = Object(p.a)(), E = Object(b.a)(n, f), _ = (e, s) => y(Object(m.a)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					E && _("modal", "show")
				}, [E]);
				if (!E || !x) return null;
				const j = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: h,
					title: j,
					onClose: () => {
						v(!1), _("close", "click"), k(Object(i.y)()), k(Object(i.J)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						k(Object(i.y)())
					}
				}, r.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", r.a.createElement(a.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(u.a, {
					onClick: () => (v(!1), _("report", "click"), void k(Object(d.j)(n.id)))
				}, s.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow.ts"),
				u = n("./src/reddit/components/Popup/index.tsx"),
				m = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: x
				} = e, [v, h] = Object(r.useState)(s.Survey), k = Object(f.b)(n.id, x), y = Object(a.c)(), E = Object(b.a)(), _ = Object(f.a)(n, x), j = (e, s) => E(Object(p.b)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					_ && j("modal", "show")
				}, [_]);
				const O = e => {
					h(s.Closed), j("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.j)(n.id, void 0, e))
				};
				if (!_) return null;
				let g = null;
				const C = {
					id: k,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						h(s.Closed), j("close", "click"), y(Object(d.y)())
					},
					onClickOutside: () => {
						y(Object(d.y)())
					}
				};
				switch (v) {
					case s.Survey:
						g = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(s.OffTopic), j("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(s.DontLike), j("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(s.BreaksRules), j("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						g = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						g = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						g = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", c.a.createElement("a", {
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
							onClick: () => O("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), c.a.createElement(m.a, {
							onClick: () => O("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return g
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(s || (s = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Popup/index.m.less"),
				c = n.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: c.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				c = n.n(r),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				i = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(i);

			function l(e) {
				const {
					id: t = c()(),
					onClose: n,
					onClickOutside: s,
					title: r,
					children: i
				} = e;
				return Object(a.a)(t, s), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, r), o.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), i)
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/isRemoved.ts"),
				x = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Report/index.tsx"),
				g = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				I = n("./src/reddit/components/PostBadges/index.m.less"),
				w = n.n(I);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", L({
					className: w.a.removalReason
				}, e), e.children),
				T = () => s.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				N = () => s.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				F = e => s.fbt._("Moderator of {community name}", [s.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => s.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				R = () => s.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, n) => {
					const s = "PostBadges--".concat(e, "--").concat(t);
					return n ? "".concat(s, "--").concat(n) : s
				},
				D = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				H = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(k.u)(e, {
							postId: n.id
						})
					},
					modModeEnabled: b.P
				}),
				U = Object(c.b)(H, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(U(e => {
				let {
					className: t,
					displayText: n,
					isSubreddit: c,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: k,
					modModeEnabled: I,
					onHideTooltip: D,
					onOpenRemovalReasonModal: H,
					onShowTooltip: U,
					post: V,
					tooltipType: z
				} = e;
				const W = {
						caretOnTop: !1
					},
					Z = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === p.a.SUBREDDIT,
					G = B("Approve", V.id, z),
					X = B("Archived", V.id, z),
					J = B("Automod", V.id, z),
					K = B("Lock", V.id, z),
					q = B("Mod", V.id, z),
					Y = B("Remove", V.id, z),
					Q = B("Report", V.id, z),
					$ = B("Spam", V.id, z),
					ee = B("Sticky", V.id, z),
					te = B("Pinned", V.id, z);
				return r.a.createElement("div", {
					className: t
				}, a && n && V.distinguishType === d.C.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					className: w.a.modIcon,
					desc: F(n),
					id: q,
					onMouseEnter: U(q),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: q,
					text: F(n)
				}, W))), V.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: w.a.archivedIcon,
					desc: T(),
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: X,
					text: T()
				}, W))), V.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: w.a.lockIcon,
					desc: N(),
					id: K,
					onMouseEnter: U(K),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: K,
					text: N()
				}, W))), c && Object(h.k)(V) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: w.a.stickyIcon,
					desc: A(),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: ee,
					text: A()
				}, W))), k && b && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: w.a.stickyIcon,
					desc: R(),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: te,
					text: R()
				}, W))), (V.isApproved || V.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: w.a.approveIcon,
					desc: Object(x.a)(V),
					id: G,
					onMouseEnter: U(G),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: G,
					text: Object(x.a)(V)
				}, W))), Object(f.a)(V) && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: w.a.removeIcon,
					desc: Object(x.c)(V),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: D
				}), Z && r.a.createElement(m.a, {
					className: w.a.addRemovalReason,
					onClick: H,
					text: s.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && r.a.createElement(M, {
					onMouseEnter: U(Y),
					onMouseLeave: D
				}, s.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, L({
					tooltipId: Y,
					text: Object(x.c)(V)
				}, W))), V.bannedBy && V.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					className: w.a.spamIcon,
					desc: Object(x.e)(V),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: $,
					text: Object(x.e)(V)
				}, W))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					className: Object(i.a)(w.a.automoderator, !!V.bannedBy && w.a.isRemoved),
					desc: x.b,
					id: J,
					onMouseEnter: U(J),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: J,
					text: x.b
				}, W))), Object(v.a)(V) && !I && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: w.a.reportIcon,
					desc: Object(x.d)(V.numReports),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: D
				}), r.a.createElement(u.c, L({
					tooltipId: Q,
					text: Object(x.d)(V.numReports)
				}, W))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/helpers/trackers/gallery.ts"),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = n("./src/reddit/hooks/useTracking.ts");
			var l = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(d.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(a.d(e.postId))
							})
						}, [n, e.postId]),
						c = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(i.a)(t, r, c), o.a.createElement("div", {
						"aria-role": "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/connectors/PostViewable/index.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/video.ts"),
				f = n("./src/lib/classNames/index.ts"),
				x = n("./src/higherOrderComponents/withClickTracking.tsx"),
				v = n("./src/reddit/components/PostContainer/index.m.less"),
				h = n.n(v);
			const k = Object(r.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: n
						} = t;
						return Object(p.b)(e, n.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					buffering: (e, t) => {
						let {
							post: n
						} = t;
						return Object(b.a)(e, {
							postId: n.id
						})
					},
					playing: (e, t) => {
						let {
							post: n
						} = t;
						return Object(b.f)(e, {
							postId: n.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: n
						} = t;
						return Object(b.c)(e, {
							postId: n.id
						})
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: n
						} = t;
						return Object(p.i)(e, {
							postId: n.id
						})
					}
				}),
				y = Object(u.a)(k),
				E = e => {
					const t = Object(x.d)(e.target, e.currentTarget),
						n = Object(x.b)(e.target, e.currentTarget, x.a.buttons);
					return "subreddit" !== t && n
				};
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: a,
						post: i,
						onClick: d,
						onPostContentClick: u,
						style: p,
						ref: b
					} = this.props, x = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: p,
						ref: b,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							!this.cancelClick && n.button < 2 && (e(() => d && d(n, i, t, r))(n), u && E(n) && u(n, i))
						},
						className: Object(f.a)(h.a.WrappedPost, s, "Post ".concat(i.id), {
							promotedlink: i.isSponsored
						}),
						id: a ? a(i.id) : i.id,
						tabIndex: -1,
						"data-testid": i.id
					}, n), v = !!i.media && i.media.type === m.o.VIDEO;
					return i.isSponsored || v ? o.a.createElement(c.a, {
						post: i,
						trackDisplay: !0
					}, x) : i.media && Object(m.F)(i.media) ? o.a.createElement(l, {
						postId: i.id
					}, x) : x
				}
			}
			t.a = y(Object(x.c)(_))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				m = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(u.o)({
							postId: n,
							isFollowed: r
						}) : Object(u.g)({
							postId: n,
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
						post: n
					} = this.props, o = this.state.isHovered, c = n.isFollowed;
					let a = c ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return c && o && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(i.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const f = Object(c.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: n
				} = t;
				return {
					onFollow: () => e(Object(d.u)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/getShortenedLink.ts"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SourceLink/index.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(i.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);

			function b(e) {
				const {
					className: t,
					post: n,
					isCommentsPage: s
				} = e, {
					source: i,
					isSponsored: d
				} = n;
				return i ? o.a.createElement(p, {
					className: Object(r.a)({
						[l.a["m-comment"]]: s
					}, t)
				}, o.a.createElement(a.a, {
					href: i.url,
					isSponsored: d,
					postId: n.id,
					source: i
				}, Object(c.a)(n), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				m = n.n(u),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const v = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: n
					} = e, s = x(e, ["small", "shouldReverseColor"]);
					const r = n ? a.i : a.f;
					return o.a.createElement(r, f({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", m.a),
				h = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: n,
						shouldReverseColor: s
					} = e, r = x(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = s ? a.f : a.i;
					return o.a.createElement(c, f({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", m.a),
				k = b.a.wrapped(i.a, "Checkmark", m.a),
				y = b.a.wrapped(d.a, "Plus", m.a),
				E = b.a.div("ButtonSpacer", m.a);
			class _ extends o.a.Component {
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
							identifier: n,
							onSubscribe: s,
							onUnsubscribe: r,
							postId: c,
							sendEvent: a,
							small: i = !1,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: b,
							onSubscriptionsRequested: _
						} = e,
						j = x(e, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						O = this.state.isHovered;
					let g = d ? "subscribed" : "subscribe";
					d && O && (g = "unsubscribe");
					const C = Object(l.a)({
						type: n.type,
						key: g
					});
					return d ? this.state.hasJustSubscribed || u ? o.a.createElement(h, f({
						className: Object(p.a)(t, {
							[m.a.isLarge]: !i,
							[m.a.unsubscribeButtonHoverStyles]: !i
						}),
						onClick: this.onClick,
						small: i,
						belongsToType: n.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, j), i && o.a.createElement(k, null), !i && !O && o.a.createElement(k, null), !i && C) : i ? null : o.a.createElement(E, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v, f({
						className: Object(p.a)(t, {
							[m.a.isLarge]: !i
						}),
						onClick: this.onClick,
						small: i
					}, j, {
						id: "subscribe-button-".concat(c),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(y, null), !i && C))
				}
			}
			t.a = Object(c.a)(Object(r.c)(_))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				c = e => {
					let {
						type: t,
						key: n
					} = e;
					return r[o({
						type: t
					})][n]()
				}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: c.cb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(r.d([n], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([n], !1))
				}
			})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				d = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const b = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: c,
						"data-redditstyle": a
					} = t, i = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, n) => {
						const s = !(!t && !n);
						let o = "";
						return o = e ? s ? u.a.mDisabledRedditStyle : u.a.mDisabled : s ? u.a.mActiveRedditStyle : u.a.mActive
					})(s, c, a);
					return o.a.createElement(e, m({
						className: Object(r.a)(u.a.Checkbox, d, n)
					}, i))
				},
				f = b(d.a),
				x = b(i);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? f : c.a;
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				c = s.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : s.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + s.fbt._("Reason by {username}:", [s.fbt._param("username", "u/".concat(e.bannedBy))], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + s.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, n) => Object.assign({
					gallery: r.gallery(e, t, n),
					post: r.post(e, t)
				}, r.defaults(e)),
				a = (e, t) => n => Object.assign(Object.assign({}, c(n, e, t)), {
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.media(n, e)
				}),
				i = (e, t, n) => a => {
					const i = Object(o.a)(t);
					return Object.assign(Object.assign({}, c(a, e, n)), {
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, r.media(a, e)), {
							outboundUrl: t,
							outboundDomain: i ? i.hostname : void 0
						})
					})
				},
				d = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, n) => o => Object.assign(Object.assign({}, c(o, e, n)), {
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => r => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				}),
				r = (e, t, n, o) => r => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			t.a = function(e, t, n) {
				Object(s.useEffect)(() => {
					const s = e && e.current;
					if (!s || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, n);
					return o.observe(s), () => {
						o.unobserve(s)
					}
				}, [e, t, n])
			}
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return document.body.addEventListener("click", n), () => {
						document.body.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(c);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.142a954c2c2482decfdb.js.map
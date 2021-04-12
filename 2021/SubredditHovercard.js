// https://www.redditstatic.com/desktop2x/SubredditHovercard.4e1bdfe9a149f04394aa.js
// Retrieved at 4/12/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditHovercard"], {
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let s = e;
				return "/" !== s.substr(-1) && (s += "/"), s += Object(n.c)(t)
			}
		},
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, s) {
			e.exports = {
				nsfwText: "_1x9diBHPBP-hL1JiwUwJ5J",
				privateIcon: "_2B0OHMLKb9TXNdd9g5Ere-",
				quarantinedIcon: "_1xKxnscCn2PjBiXhorZef4",
				employeesIcon: "_1LLqoNXrOsaIkMtOuTBmO5",
				restrictedIcon: "QB2Yrr8uihZVRhvwrKuMS",
				TypeLabel: "_3w_KK8BUvCMkCPWZVsZQn0",
				typeLabel: "_3w_KK8BUvCMkCPWZVsZQn0"
			}
		},
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/controls/IconTooltip/index.tsx"),
				u = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				b = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				v = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				h = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/CommunityType/index.m.less"),
				C = s.n(O);
			const E = s("./src/lib/lessComponent.tsx").a.span("TypeLabel", C.a),
				j = Object(c.c)({
					restrictions: I.p
				}),
				g = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i.b, {
					flair: {
						type: f.f.Nsfw,
						text: "nsfw"
					}
				}), o.a.createElement("span", {
					className: C.a.nsfwText
				}, n.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				T = ({
					isInIcons2020: e
				}) => o.a.createElement(E, null, e ? o.a.createElement(l.a, {
					name: "quarantined",
					className: C.a.quarantinedIcon
				}) : o.a.createElement(h.a, {
					className: C.a.quarantinedIcon
				}), o.a.createElement("span", null, n.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				w = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, e.subreddit.isNSFW && o.a.createElement(g, null)), o.a.createElement(E, {
					className: e.className
				}, e.description ? o.a.createElement(m.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, o.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && o.a.createElement(T, {
					isInIcons2020: e.isInIcons2020
				})),
				P = Object(d.b)(j);
			t.a = P(({
				className: e,
				iconClassName: t,
				restrictions: s = x.e.Post,
				textClassName: r,
				subreddit: d
			}) => {
				const i = Object(u.a)();
				switch (d.type) {
					case y.e.Restricted:
						return o.a.createElement(w, {
							className: e,
							icon: i ? o.a.createElement(l.a, {
								name: "hide",
								className: Object(a.a)(C.a.restrictedIcon, t)
							}) : o.a.createElement(b.a, {
								className: Object(a.a)(C.a.restrictedIcon, t)
							}),
							text: n.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: r,
							description: Object(x.g)(s),
							subreddit: d
						});
					case y.e.Private:
						return o.a.createElement(w, {
							className: e,
							icon: i ? o.a.createElement(l.a, {
								name: "hide",
								className: Object(a.a)(C.a.privateIcon, t)
							}) : o.a.createElement(v.a, {
								className: Object(a.a)(C.a.privateIcon, t)
							}),
							text: n.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: r,
							description: n.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: d
						});
					case y.e.EmployeesOnly:
						return o.a.createElement(w, {
							className: e,
							icon: i ? o.a.createElement(l.a, {
								name: "admin",
								className: Object(a.a)(C.a.employeesIcon, t)
							}) : o.a.createElement(p.a, {
								className: Object(a.a)(C.a.employeesIcon, t)
							}),
							text: d.allowContractors ? n.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : n.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: r,
							subreddit: d
						});
					default:
						return o.a.createElement(o.a.Fragment, null, d.isQuarantined && o.a.createElement(T, {
							isInIcons2020: i
						}), d.isNSFW && o.a.createElement(g, null))
				}
			})
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const o = r.a.createContext(() => {}),
				d = r.a.createContext(() => {});

			function i() {
				return Object(n.useContext)(o)
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, s) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(m.b)(t.tooltipId)(e)
			});
			var l = Object(d.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(a.i)()),
					onOpenUserDropdown: async () => {
						e(Object(a.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(c.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = s("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(m.b)(t.tooltipId)(e)
			});
			var v = Object(d.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(a.i)()),
					onOpenUserDropdown: async () => {
						e(Object(a.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName))
					}
				})),
				h = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = s.n(h);
			class y extends r.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return r.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const x = o.a.wrapped(y, "HoverDiv", f.a),
				I = l(x),
				O = v(x)
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "_1P90KdCErwhRNJuZZheua7",
				subredditIcon: "_1P90KdCErwhRNJuZZheua7",
				SubredditNameDisplay: "_3yYcNCaibIQ7tljrEg4otg",
				subredditNameDisplay: "_3yYcNCaibIQ7tljrEg4otg",
				SubredditDescription: "XZpmTYGkFbfGNV3Osr1mJ",
				subredditDescription: "XZpmTYGkFbfGNV3Osr1mJ",
				SubredditNameContainer: "bIjG4TmpAGTshjKedXK4d",
				subredditNameContainer: "bIjG4TmpAGTshjKedXK4d",
				SubredditInfoContainer: "_3eP0ejGOD9ZSdYAZ5VMpke",
				subredditInfoContainer: "_3eP0ejGOD9ZSdYAZ5VMpke",
				Subscribers: "_1483avlTnkR6Eyr0gcsB-_",
				subscribers: "_1483avlTnkR6Eyr0gcsB-_",
				Online: "_3t6knJ998hsjJpD8rf_kd1",
				online: "_3t6knJ998hsjJpD8rf_kd1",
				Count: "_2fZqHR5v7J_cK10VMb1oQ-",
				count: "_2fZqHR5v7J_cK10VMb1oQ-",
				CountLabel: "_2zg4pUVwjyFfXZlzpqSI0a",
				countLabel: "_2zg4pUVwjyFfXZlzpqSI0a",
				CardContainer: "_197SqY-gDtObhzjz9SlSEp",
				cardContainer: "_197SqY-gDtObhzjz9SlSEp",
				Container: "cwnB_XN2JIEYp4vZcMrLM",
				container: "cwnB_XN2JIEYp4vZcMrLM"
			}
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/Hovercards/helpers.ts"),
				d = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, s) => n => ({
					source: "subreddit_hovercard",
					action: "click",
					noun: t,
					post: s ? c.post(n, s) : void 0,
					subreddit: c.subredditById(n, e),
					screen: c.screen(n)
				}),
				m = (e, t) => s => ({
					source: "subreddit_hovercard",
					action: "view",
					noun: "hover_subreddit_hovercard",
					post: t ? c.post(s, t) : void 0,
					subreddit: c.subredditById(s, e),
					screen: c.screen(s)
				});
			var u = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/components/CommunityType/index.tsx"),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = s("./src/reddit/components/SubredditIcon/index.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				T = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts").c,
				w = s("./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less"),
				P = s.n(w);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = y.a.wrapped(E.b, "SubredditIcon", P.a), S = y.a.wrapped(f.a, "SubredditNameDisplay", P.a), H = y.a.div("SubredditDescription", P.a), L = y.a.div("SubredditNameContainer", P.a), M = y.a.div("SubredditInfoContainer", P.a), A = y.a.div("Subscribers", P.a), D = y.a.div("Online", P.a), K = y.a.div("Count", P.a), B = y.a.div("CountLabel", P.a), U = y.a.div("Container", P.a), F = y.a.div("CardContainer", P.a), R = e => r.a.createElement(M, null, r.a.createElement(A, null, r.a.createElement(K, null, Object(x.b)(e.subredditAboutInfo.subscribers)), r.a.createElement(B, null, _._({
				"*": "Members",
				_1: " Member"
			}, [_._plural(e.subredditAboutInfo.subscribers)], {
				hk: "2L8qF4"
			}))), r.a.createElement(D, null, r.a.createElement(K, null, Object(x.b)(e.subredditAboutInfo.accountsActive)), r.a.createElement(B, null, _._({
				"*": "Online",
				_1: " Online"
			}, [_._plural(e.subredditAboutInfo.accountsActive)], {
				hk: "3OMjYw"
			})))), Z = Object(C.a)(e => {
				const {
					className: t,
					hideNSFWPref: s,
					hoverId: o,
					postId: d,
					sendEvent: i,
					style: c,
					subreddit: m,
					subredditAboutInfo: u
				} = e, l = T(), p = Object(n.useCallback)(() => {
					i(a(m.id, "title", d)), d && l(d)
				}, [i, d, m]), b = Object(n.useCallback)(() => {
					i(a(m.id, "visit", d)), d && l(d)
				}, [i, d, m]);
				return m && u ? r.a.createElement(U, {
					className: t,
					id: o,
					style: c
				}, r.a.createElement(F, null, r.a.createElement(L, null, r.a.createElement(k, {
					subredditOrProfile: m,
					shouldHideNsfwIcon: s
				}), r.a.createElement(S, {
					onClick: p,
					to: `${m.url}`
				}, m.displayText)), r.a.createElement(R, {
					subredditAboutInfo: u
				}), r.a.createElement(I.a, {
					subreddit: m
				}), r.a.createElement(H, null, Object(g.a)(u.publicDescription || "", 140)), r.a.createElement(j.k, {
					onClick: b,
					to: `${m.url}`
				}, _._("View Community", null, {
					hk: "3TWTGC"
				})), r.a.createElement(O.h, {
					id: m.id,
					type: "subreddit"
				}))) : r.a.createElement(U, {
					style: c
				})
			});
			var V = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return r.a.createElement(Z, N({
					isOpen: t
				}, e))
			};
			const z = Object(l.c)({
				activeTooltipId: v.a,
				hideNSFWPref: h.B,
				subreddit: b.A,
				subredditAboutInfo: b.x
			});
			var G = Object(u.b)(z, e => ({
				onHideTooltip: () => e(Object(p.i)())
			}))(Object(i.c)(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, r.a.createElement(V, {
				activeTooltipId: e.activeTooltipId,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				onHideTooltip: e.onHideTooltip,
				postId: e.postId,
				sendEvent: e.sendEvent,
				subreddit: e.subreddit,
				subredditAboutInfo: e.subredditAboutInfo,
				tooltipId: e.tooltipId,
				tooltipPosition: e.tooltipPosition,
				tooltipType: e.tooltipType
			}))));
			const J = "SubredditInfoTooltip";
			class W extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(m(this.props.subredditName, this.props.postId))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						itemId: e.postId,
						subredditName: e.subredditName,
						tooltipIdPrefix: J,
						tooltipType: e.tooltipType
					}), s = `${t}-hover-id`;
					return r.a.createElement(d.b, {
						hoverId: s,
						sendHoverEvent: this.sendEvent,
						authorOrSubredditName: e.subredditName,
						tooltipId: t
					}, e.children, r.a.createElement(G, {
						className: e.className,
						hoverId: s,
						postId: e.postId,
						subredditName: e.subredditName,
						tooltipId: t,
						tooltipPosition: e.tooltipPosition,
						tooltipType: e.tooltipType
					}))
				}
			}
			t.default = Object(i.c)(W)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.tsx"),
				o = s("./src/reddit/components/Hovercards/helpers.m.less"),
				d = s.n(o);
			const i = n.a.wrapped(r.a, "UserActionItem", d.a),
				c = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: r,
						tooltipType: o
					} = e;
					let d = r;
					return s && (d = `${d}--${s}`), o && (d = `${d}--${o}`), t && (d = `${d}--${t}`), n && (d = `${d}--${n}`), d
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "i", (function() {
				return P
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/lodash/isNil.js"),
				c = s.n(i),
				a = s("./src/reddit/constants/jsapiEvents.ts");
			var m = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(d.c)({
				consumers: e => e.jsApi
			});
			class l extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...n
							}
						} = this;
						m.a.publish(a.a, n, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(l),
				b = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(v.a)(e, t),
					n = Object(h.I)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var y = Object(o.b)(() => Object(d.a)(f, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const x = (e, t) => {
				const s = Object(v.a)(e, t),
					n = Object(h.I)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var I = Object(o.b)(() => Object(d.a)(x, e => e))(e => r.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var O = Object(o.b)(() => Object(d.c)({
					subreddit: h.T
				}))(e => r.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				C = s("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(C.a)(), o = Object(n.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: o
				})
			};
			var j = e => {
				const {
					post: t,
					subredditOrProfile: s,
					isModerator: o
				} = Object(C.a)(), d = Object(n.useMemo)(() => ({
					author: t.author,
					isModerator: o,
					post: {
						id: t.id
					},
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {}
				}), [t, s, o]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: d
				})
			};
			var g = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(C.a)(), o = Object(n.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: o
				})
			};
			var T = Object(o.b)(() => Object(d.c)({
				subreddit: h.T
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var w = Object(o.b)(() => Object(d.c)({
				subredditOrProfile: (e, t) => Object(h.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var P = Object(o.b)(() => Object(d.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(h.T)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				i = s("./src/reddit/controls/IconTooltip/index.m.less"),
				c = s.n(i);
			const a = Object(o.a)(d.b),
				m = ["center", "top"],
				u = ["center", "bottom"];
			class l extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return r.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, r.a.createElement(a, {
						className: c.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						text: this.props.text,
						tooltipPosition: u
					}))
				}
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/comments.ts"),
				r = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case n.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case n.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case n.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === n.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, s, n) => {
					let o = Object(r.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						d = t;
					for (; o && o.depth > s && o.prev && (d = o.prev, (o = Object(r.n)(n, {
							commentLink: d,
							commentsPageKey: e
						})) && !(o.depth <= s)););
					return d.id
				},
				u = (e, t, s) => {
					const {
						commentLists: n,
						comments: r
					} = e, {
						head: i
					} = n[t];
					if (i) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const s = Object(d.c)(e, {
								experimentEligibilitySelector: d.a,
								experimentName: o.w,
								expEventOverride: t
							});
							return !!(Object(o.yd)(s) ? void 0 : s)
						})(s)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var d = (e = o, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				i = s("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var a = (e = c, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var u = (e = m, t) => {
				switch (t.type) {
					case i.c:
					case i.g: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var p = (e = l, t) => {
					switch (t.type) {
						case i.d:
						case i.h: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(n.c)({
					error: a,
					fullyLoaded: u,
					pending: p
				}),
				v = s("./node_modules/lodash/uniqBy.js"),
				h = s.n(v),
				f = s("./node_modules/lodash/values.js"),
				y = s.n(f),
				x = s("./src/reddit/actions/comment/constants.ts"),
				I = s("./src/reddit/actions/comment/websocket/constants.ts");
			const O = {};

			function C(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var E = (e = O, t) => {
					switch (t.type) {
						case i.f:
						case x.u:
						case i.b: {
							const {
								comments: s,
								key: n
							} = t.payload, r = e[n] ? e[n] : [], o = function(e, t) {
								return y()(e).map(e => {
									const s = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: s,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(s, r.find(e => e.stickied)), d = C([...r, ...o]);
							return {
								...e,
								[n]: [...d]
							}
						}
						case I.b:
						case I.c:
						case I.d:
						case x.G:
						case x.F: {
							const {
								comment: {
									id: s,
									created: n,
									isStickied: r,
									authorId: o
								},
								commentsPageKey: d,
								isChatSort: i
							} = t.payload;
							return !1 === i ? e : {
								...e,
								[d]: [...C([...e[d] ? e[d] : [], {
									id: s,
									created: n,
									stickied: r,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				j = s("./node_modules/lodash/mapValues.js"),
				g = s.n(j),
				T = s("./src/reddit/helpers/commentList/index.ts"),
				w = s("./src/reddit/models/Comment/index.ts");
			const P = {};

			function N(e) {
				const t = e;
				return g()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			var _ = (e = P, t) => {
				switch (t.type) {
					case x.u: {
						const {
							comments: s,
							commentLists: n,
							continueThreads: r,
							key: o,
							moreCommentsItem: d,
							moreComments: i
						} = t.payload, c = n[d.postId], a = e[o], m = {}, u = a[d.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							m[e] = {
								...a[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							m[e] = {
								...a[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(T.c)({
									commentLink: c.head,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: r
								}),
								t = Object(T.c)({
									commentLink: c.tail,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...N(s),
								...N(r),
								...N(i),
								...m
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: s,
							continueThreads: n,
							key: r,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...N(s),
								...N(n),
								...N(o)
							}
						}
					}
					case I.b:
						const {
							comment: s, commentsPageKey: n, depth: r, headCommentId: o, originId: d, isChatSort: c
						} = t.payload, a = e[n], m = {};
						let u = null;
						if (c) return o && (m[o] = {
							...a[o],
							prev: Object(w.g)(s.id)
						}, u = Object(w.g)(o)), {
							...e,
							[n]: {
								...e[n],
								...m,
								[s.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const o = s.parentId;
							if (d && o) {
								const s = "moreComments-" + d;
								if (a[o] && !a[s]) {
									const d = a[o].next;
									return d && (m[d.id] = {
										...a[d.id],
										prev: Object(w.h)(s)
									}, u = d), m[o] = {
										...a[o],
										next: Object(w.h)(s)
									}, t = Object(w.g)(o), {
										...e,
										[n]: {
											...e[n],
											...m,
											[s]: {
												depth: r || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case x.G: {
							const {
								comment: s,
								commentsPageKey: n,
								headCommentId: r
							} = t.payload, o = e[n], d = {};
							let i = null;
							return r && (d[r] = {
								...o[r],
								prev: Object(w.g)(s.id)
							}, i = Object(w.g)(r)), {
								...e,
								[n]: {
									...e[n],
									...d,
									[s.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								}
							}
						}
						case x.F: {
							const {
								comment: s,
								commentsPageKey: n,
								parentCommentId: r,
								depth: o
							} = t.payload, d = e[n], i = {};
							let c = null;
							if (!d[r]) return e;
							const a = d[r].next;
							return a && (i[a.id] = {
								...d[a.id],
								prev: Object(w.g)(s.id)
							}, c = a), i[r] = {
								...d[r],
								next: Object(w.g)(s.id)
							}, {
								...e,
								[n]: {
									...e[n],
									...i,
									[s.id]: {
										depth: o,
										next: c,
										prev: Object(w.g)(r)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const k = {};
			var S = (e = k, t) => {
				switch (t.type) {
					case I.b:
					case I.c:
					case x.G: {
						const {
							comment: s,
							commentsPageKey: n,
							isChatSort: r
						} = t.payload;
						return !1 === r ? e : {
							...e,
							[n]: s.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: s,
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: s[r] && s[r].head ? s[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const H = {};
			var L = (e = H, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: s,
							postId: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case x.G: {
						const {
							parentId: s,
							commentsPageKey: n
						} = t.payload;
						return e[n] ? e : {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				api: b,
				keyToChatCommentLinks: E,
				keyToCommentThreadLinkSets: _,
				keyToHeadCommentId: S,
				keyToPostId: L,
				ads: d
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "u", (function() {
				return x
			})), s.d(t, "w", (function() {
				return I
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "g", (function() {
				return j
			})), s.d(t, "G", (function() {
				return g
			})), s.d(t, "n", (function() {
				return T
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "j", (function() {
				return P
			})), s.d(t, "l", (function() {
				return N
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "q", (function() {
				return H
			})), s.d(t, "m", (function() {
				return L
			})), s.d(t, "t", (function() {
				return M
			})), s.d(t, "z", (function() {
				return A
			})), s.d(t, "I", (function() {
				return D
			})), s.d(t, "s", (function() {
				return K
			})), s.d(t, "B", (function() {
				return B
			})), s.d(t, "C", (function() {
				return U
			})), s.d(t, "E", (function() {
				return F
			})), s.d(t, "r", (function() {
				return R
			})), s.d(t, "e", (function() {
				return Z
			})), s.d(t, "v", (function() {
				return V
			})), s.d(t, "J", (function() {
				return z
			})), s.d(t, "f", (function() {
				return G
			})), s.d(t, "i", (function() {
				return J
			})), s.d(t, "F", (function() {
				return W
			})), s.d(t, "A", (function() {
				return Q
			})), s.d(t, "H", (function() {
				return X
			})), s.d(t, "p", (function() {
				return q
			})), s.d(t, "K", (function() {
				return Y
			})), s.d(t, "D", (function() {
				return $
			})), s.d(t, "y", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeCommentPermalink/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				c = s("./src/reddit/constants/comments.ts"),
				a = s("./src/reddit/models/Post/index.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/lib/initializeClient/installReducer.ts"),
				v = s("./src/reddit/reducers/features/comments/index.ts"),
				h = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: v.a
				},
				pages: {
					comments: h.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				I = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				O = (e, t) => {
					const s = I(e, t);
					if (s) return Object(p.a)(e, {
						commentId: s
					})
				},
				C = [],
				E = Object(i.a)((e, t) => {
					const s = O(e, t),
						n = s && s.id;
					if (!n) return C;
					const {
						commentsPageKey: r
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[r], d = [];
					let i = {
						id: n,
						type: c.a.Comment
					};
					do {
						d.push(i), i = o[i.id].next
					} while (i);
					return d
				}),
				j = (e, t) => I(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				g = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					return s ? e.posts.models[s] : null
				},
				T = (e, {
					commentId: t,
					commentLink: s,
					commentsPageKey: n
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[n];
					return r ? s ? r[s.id] : t ? r[t] : null : null
				},
				w = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				P = (e, t) => {
					const s = t.commentsPageKey ? T(e, t) : null;
					return s ? s.depth : null
				},
				N = (e, {
					commentLink: t
				}) => {
					const {
						id: s,
						type: n
					} = t;
					switch (n) {
						case c.a.Comment:
							return e.features.comments.models[s];
						case c.a.MoreComments:
							return e.moreComments.models[s];
						case c.a.ContinueThread:
							return e.continueThreads.models[s];
						default:
							return null
					}
				},
				_ = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, s = Object(a.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === s && e.features.comments.models[t].author !== o.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				k = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				S = e => e.moreComments.models,
				H = e => e.features.comments.models,
				L = (e, {
					commentId: t
				}) => {
					const s = Object(p.a)(e, {
						commentId: t
					});
					return s ? Object(d.a)(Object(m.C)(e, s), t) : ""
				},
				M = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				A = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.isEditing[s] && e.features.comments.isEditing[s][t]),
				D = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.replyFormOpen[s] && e.features.comments.replyFormOpen[s][t]),
				K = (e, {
					commentsPageKey: t
				}) => {
					const s = t && e.features.comments.replyFormOpen[t] || {},
						n = Object.keys(s).find(e => s[e]),
						r = Object(p.a)(e, {
							commentId: n
						}),
						o = r && P(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof o) return {
						...r,
						depth: o
					}
				},
				B = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				U = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				F = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					if (s) {
						const t = r()(e.moreComments.models).find(t => t.postId === s && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				R = (e, {
					id: t
				}) => e.continueThreads.models[t],
				Z = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.models[t] : void 0;
					if (!s) return null;
					const n = e.authorFlair.models[s.subredditId];
					return n ? n[s.author] : null
				},
				V = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				z = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.submit.error[t];
					return s && s.fields ? s.fields.map(e => e.msg) : []
				},
				G = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.drafts[t];
					return !!s && s.autofocusDisabled
				},
				J = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				W = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.submit.error[t] : void 0;
					return s && s.fields ? s.fields.map(e => e.msg) : void 0
				},
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				X = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				q = e => e.features.comments.visitHighlightFilter,
				Y = (e, t) => {
					const s = Object(p.a)(e, t);
					if (s) return Object(u.Y)(e, s)
				},
				$ = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const s = Object(p.a)(e, {
							commentId: t
						}),
						n = s && s.authorId || "";
					return Object(l.R)(e, n)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditHovercard.4e1bdfe9a149f04394aa.js.map
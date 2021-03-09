// https://www.redditstatic.com/desktop2x/SubredditHovercard.66ddf97c5d852cbc1d18.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditHovercard"], {
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/controls/IconTooltip/index.tsx"),
				u = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				b = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				v = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				h = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/CommunityType/index.m.less"),
				I = s.n(O);
			const C = s("./src/lib/lessComponent.tsx").a.span("TypeLabel", I.a),
				j = Object(a.c)({
					restrictions: y.p
				}),
				T = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(d.b, {
					flair: {
						type: x.f.Nsfw,
						text: "nsfw"
					}
				}), o.a.createElement("span", {
					className: I.a.nsfwText
				}, r.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				N = ({
					isInIcons2020: e
				}) => o.a.createElement(C, null, e ? o.a.createElement(m.a, {
					name: "quarantined",
					className: I.a.quarantinedIcon
				}) : o.a.createElement(h.a, {
					className: I.a.quarantinedIcon
				}), o.a.createElement("span", null, r.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				_ = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, e.subreddit.isNSFW && o.a.createElement(T, null)), o.a.createElement(C, {
					className: e.className
				}, e.description ? o.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, o.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && o.a.createElement(N, {
					isInIcons2020: e.isInIcons2020
				})),
				w = Object(i.b)(j);
			t.a = w(({
				className: e,
				iconClassName: t,
				restrictions: s = f.e.Post,
				textClassName: n,
				subreddit: i
			}) => {
				const d = Object(u.a)();
				switch (i.type) {
					case E.e.Restricted:
						return o.a.createElement(_, {
							className: e,
							icon: d ? o.a.createElement(m.a, {
								name: "hide",
								className: Object(c.a)(I.a.restrictedIcon, t)
							}) : o.a.createElement(b.a, {
								className: Object(c.a)(I.a.restrictedIcon, t)
							}),
							text: r.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: n,
							description: Object(f.g)(s),
							subreddit: i
						});
					case E.e.Private:
						return o.a.createElement(_, {
							className: e,
							icon: d ? o.a.createElement(m.a, {
								name: "hide",
								className: Object(c.a)(I.a.privateIcon, t)
							}) : o.a.createElement(v.a, {
								className: Object(c.a)(I.a.privateIcon, t)
							}),
							text: r.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: n,
							description: r.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: i
						});
					case E.e.EmployeesOnly:
						return o.a.createElement(_, {
							className: e,
							icon: d ? o.a.createElement(m.a, {
								name: "admin",
								className: Object(c.a)(I.a.employeesIcon, t)
							}) : o.a.createElement(p.a, {
								className: Object(c.a)(I.a.employeesIcon, t)
							}),
							text: i.allowContractors ? r.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : r.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: n,
							subreddit: i
						});
					default:
						return o.a.createElement(o.a.Fragment, null, i.isQuarantined && o.a.createElement(N, {
							isInIcons2020: d
						}), i.isNSFW && o.a.createElement(T, null))
				}
			})
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const o = n.a.createContext(() => {}),
				i = n.a.createContext(() => {});

			function d() {
				return Object(r.useContext)(o)
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
				return y
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(i.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(a.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = s("./src/reddit/actions/subreddit.ts");
			const b = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(i.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.t)(t.authorOrSubredditName))
					}
				})),
				h = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				x = s.n(h);
			class E extends n.a.Component {
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
					return n.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const f = o.a.wrapped(E, "HoverDiv", x.a),
				y = m(f),
				O = v(f)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/Hovercards/helpers.ts"),
				i = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, s) => r => ({
					source: "subreddit_hovercard",
					action: "click",
					noun: t,
					post: s ? a.post(r, s) : void 0,
					subreddit: a.subredditById(r, e),
					screen: a.screen(r)
				}),
				l = (e, t) => s => ({
					source: "subreddit_hovercard",
					action: "view",
					noun: "hover_subreddit_hovercard",
					post: t ? a.post(s, t) : void 0,
					subreddit: a.subredditById(s, e),
					screen: a.screen(s)
				});
			var u = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/lib/lessComponent.tsx"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				y = s("./src/reddit/components/CommunityType/index.tsx"),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = s("./src/reddit/components/SubredditIcon/index.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				N = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts").c,
				_ = s("./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less"),
				w = s.n(_);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = E.a.wrapped(C.b, "SubredditIcon", w.a), P = E.a.wrapped(x.a, "SubredditNameDisplay", w.a), M = E.a.div("SubredditDescription", w.a), A = E.a.div("SubredditNameContainer", w.a), L = E.a.div("SubredditInfoContainer", w.a), k = E.a.div("Subscribers", w.a), D = E.a.div("Online", w.a), B = E.a.div("Count", w.a), U = E.a.div("CountLabel", w.a), R = E.a.div("Container", w.a), Z = E.a.div("CardContainer", w.a), K = e => n.a.createElement(L, null, n.a.createElement(k, null, n.a.createElement(B, null, Object(f.b)(e.subredditAboutInfo.subscribers)), n.a.createElement(U, null, S._({
				"*": "Members",
				_1: " Member"
			}, [S._plural(e.subredditAboutInfo.subscribers)], {
				hk: "2L8qF4"
			}))), n.a.createElement(D, null, n.a.createElement(B, null, Object(f.b)(e.subredditAboutInfo.accountsActive)), n.a.createElement(U, null, S._({
				"*": "Online",
				_1: " Online"
			}, [S._plural(e.subredditAboutInfo.accountsActive)], {
				hk: "3OMjYw"
			})))), F = Object(I.a)(e => {
				const {
					className: t,
					hideNSFWPref: s,
					hoverId: o,
					postId: i,
					sendEvent: d,
					style: a,
					subreddit: l,
					subredditAboutInfo: u
				} = e, m = N(), p = Object(r.useCallback)(() => {
					d(c(l.id, "title", i)), i && m(i)
				}, [d, i, l]), b = Object(r.useCallback)(() => {
					d(c(l.id, "visit", i)), i && m(i)
				}, [d, i, l]);
				return l && u ? n.a.createElement(R, {
					className: t,
					id: o,
					style: a
				}, n.a.createElement(Z, null, n.a.createElement(A, null, n.a.createElement(H, {
					subredditOrProfile: l,
					shouldHideNsfwIcon: s
				}), n.a.createElement(P, {
					onClick: p,
					to: `${l.url}`
				}, l.displayText)), n.a.createElement(K, {
					subredditAboutInfo: u
				}), n.a.createElement(y.a, {
					subreddit: l
				}), n.a.createElement(M, null, Object(T.a)(u.publicDescription || "", 140)), n.a.createElement(j.k, {
					onClick: b,
					to: `${l.url}`
				}, S._("View Community", null, {
					hk: "3TWTGC"
				})), n.a.createElement(O.h, {
					id: l.id,
					type: "subreddit"
				}))) : n.a.createElement(R, {
					style: a
				})
			});
			var V = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return n.a.createElement(F, g({
					isOpen: t
				}, e))
			};
			const z = Object(m.c)({
				activeTooltipId: v.a,
				hideNSFWPref: h.B,
				subreddit: b.A,
				subredditAboutInfo: b.x
			});
			var W = Object(u.b)(z, e => ({
				onHideTooltip: () => e(Object(p.i)())
			}))(Object(d.c)(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(V, {
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
			class Q extends n.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(l(this.props.subredditName, this.props.postId))
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
					return n.a.createElement(i.b, {
						hoverId: s,
						sendHoverEvent: this.sendEvent,
						authorOrSubredditName: e.subredditName,
						tooltipId: t
					}, e.children, n.a.createElement(W, {
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
			t.default = Object(d.c)(Q)
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
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				o = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(o);
			const d = r.a.wrapped(n.a, "UserActionItem", i.a),
				a = e => {
					const {
						author: t,
						itemId: s,
						subredditName: r,
						tooltipIdPrefix: n,
						tooltipType: o
					} = e;
					let i = n;
					return s && (i = `${i}--${s}`), o && (i = `${i}--${o}`), t && (i = `${i}--${t}`), r && (i = `${i}--${r}`), i
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "i", (function() {
				return g
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/lodash/isNil.js"),
				a = s.n(d),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...r
							}
						} = this;
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					a()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					a()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(m),
				b = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const s = Object(v.a)(e, t),
					r = Object(h.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(o.b)(() => Object(i.a)(x, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
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
			const f = (e, t) => {
				const s = Object(v.a)(e, t),
					r = Object(h.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var y = Object(o.b)(() => Object(i.a)(f, e => e))(e => n.a.createElement(p, {
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
			var O = Object(o.b)(() => Object(i.c)({
					subreddit: h.T
				}))(e => n.a.createElement(p, {
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
				I = s("./src/reddit/contexts/Post/index.tsx");

			function C() {
				const e = Object(r.useContext)(I.c);
				if (!e) throw new Error("No Post context!");
				return e
			}
			var j = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = C(), o = Object(r.useMemo)(() => ({
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
				return n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: o
				})
			};
			var T = e => {
				const {
					post: t,
					subredditOrProfile: s,
					isModerator: o
				} = C(), i = Object(r.useMemo)(() => ({
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
				return n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: i
				})
			};
			var N = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = C(), o = Object(r.useMemo)(() => ({
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
				return n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: o
				})
			};
			var _ = Object(o.b)(() => Object(i.c)({
				subreddit: h.T
			}))(e => n.a.createElement(p, {
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
			var w = Object(o.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(h.L)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
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
			var g = Object(o.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(h.T)(e, {
					subredditId: t
				}) : null
			}))(e => n.a.createElement(p, {
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
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/controls/IconTooltip/index.m.less"),
				a = s.n(d);
			const c = Object(o.a)(i.b),
				l = ["center", "top"],
				u = ["center", "bottom"];
			class m extends n.a.Component {
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
					return n.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, n.a.createElement(c, {
						className: a.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: l,
						text: this.props.text,
						tooltipPosition: u
					}))
				}
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(e.className, d.a.admin, {
					[d.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), n.a.createElement("path", {
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
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.m.less"),
				o = s.n(n);
			t.a = r.a.div("inlineRow", o.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditHovercard.66ddf97c5d852cbc1d18.js.map
// https://www.redditstatic.com/desktop2x/SubredditHovercard.1b94721ab7d7ec414f4b.js
// Retrieved at 7/14/2021, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditHovercard"], {
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/components/Flair/index.tsx"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/controls/IconTooltip/index.tsx"),
				u = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/models/Flair/index.ts"),
				p = r("./src/reddit/models/Subreddit/index.ts"),
				b = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/components/CommunityType/index.m.less"),
				y = r.n(h);
			const f = r("./src/lib/lessComponent.tsx").a.span("TypeLabel", y.a),
				E = Object(a.c)({
					restrictions: v.m
				}),
				x = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(d.b, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), o.a.createElement("span", {
					className: y.a.nsfwText
				}, n.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				O = () => o.a.createElement(f, null, o.a.createElement(u.a, {
					name: "quarantined",
					className: y.a.quarantinedIcon
				}), o.a.createElement("span", null, n.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				I = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, e.subreddit.isNSFW && o.a.createElement(x, null)), o.a.createElement(f, {
					className: e.className
				}, e.description ? o.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, o.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && o.a.createElement(O, null)),
				S = Object(i.b)(E);
			t.a = S(({
				className: e,
				iconClassName: t,
				restrictions: r = b.e.Post,
				textClassName: s,
				subreddit: i
			}) => {
				switch (i.type) {
					case p.f.Restricted:
						return o.a.createElement(I, {
							className: e,
							icon: o.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(y.a.restrictedIcon, t)
							}),
							text: n.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: s,
							description: Object(b.g)(r),
							subreddit: i
						});
					case p.f.Private:
						return o.a.createElement(I, {
							className: e,
							icon: o.a.createElement(u.a, {
								name: "hide",
								className: Object(c.a)(y.a.privateIcon, t)
							}),
							text: n.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: s,
							description: n.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: i
						});
					case p.f.EmployeesOnly:
						return o.a.createElement(I, {
							className: e,
							icon: o.a.createElement(u.a, {
								name: "admin",
								className: Object(c.a)(y.a.employeesIcon, t)
							}),
							text: i.allowContractors ? n.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : n.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: s,
							subreddit: i
						});
					default:
						return o.a.createElement(o.a.Fragment, null, i.isQuarantined && o.a.createElement(O, null), i.isNSFW && o.a.createElement(x, null))
				}
			})
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			const o = s.a.createContext(() => {}),
				i = s.a.createContext(() => {});

			function d() {
				return Object(n.useContext)(o)
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return O
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
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
				p = r("./src/reddit/actions/subreddit.ts");
			const b = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(i.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName))
					}
				})),
				h = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				y = r.n(h);
			class f extends s.a.Component {
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
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const E = o.a.wrapped(f, "HoverDiv", y.a),
				x = m(E),
				O = v(E)
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less": function(e, t, r) {
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
		"./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/Hovercards/helpers.ts"),
				i = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, r) => n => ({
					source: "subreddit_hovercard",
					action: "click",
					noun: t,
					post: r ? a.post(n, r) : void 0,
					subreddit: a.subredditById(n, e),
					screen: a.screen(n)
				}),
				l = (e, t) => r => ({
					source: "subreddit_hovercard",
					action: "view",
					noun: "hover_subreddit_hovercard",
					post: t ? a.post(r, t) : void 0,
					subreddit: a.subredditById(r, e),
					screen: a.screen(r)
				});
			var u = r("./node_modules/react-redux/es/index.js"),
				m = r("./node_modules/reselect/es/index.js"),
				p = r("./src/reddit/actions/tooltip.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				y = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = r("./src/lib/lessComponent.tsx"),
				E = r("./src/lib/prettyPrintNumber/index.ts"),
				x = r("./src/reddit/components/CommunityType/index.tsx"),
				O = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				S = r("./src/reddit/components/SubredditIcon/index.tsx"),
				j = r("./src/reddit/controls/Button/index.tsx"),
				N = r("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				_ = r("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts").c,
				T = r("./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less"),
				C = r.n(T);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), B = f.a.wrapped(S.b, "SubredditIcon", C.a), k = f.a.wrapped(y.a, "SubredditNameDisplay", C.a), w = f.a.div("SubredditDescription", C.a), H = f.a.div("SubredditNameContainer", C.a), L = f.a.div("SubredditInfoContainer", C.a), M = f.a.div("Subscribers", C.a), A = f.a.div("Online", C.a), D = f.a.div("Count", C.a), U = f.a.div("CountLabel", C.a), R = f.a.div("Container", C.a), K = f.a.div("CardContainer", C.a), q = e => s.a.createElement(L, null, s.a.createElement(M, null, s.a.createElement(D, null, Object(E.b)(e.subredditAboutInfo.subscribers)), s.a.createElement(U, null, g._({
				"*": "Members",
				_1: " Member"
			}, [g._plural(e.subredditAboutInfo.subscribers)], {
				hk: "2L8qF4"
			}))), s.a.createElement(A, null, s.a.createElement(D, null, Object(E.b)(e.subredditAboutInfo.accountsActive)), s.a.createElement(U, null, g._({
				"*": "Online",
				_1: " Online"
			}, [g._plural(e.subredditAboutInfo.accountsActive)], {
				hk: "3OMjYw"
			})))), F = Object(I.a)(e => {
				const {
					className: t,
					hideNSFWPref: r,
					hoverId: o,
					postId: i,
					sendEvent: d,
					style: a,
					subreddit: l,
					subredditAboutInfo: u
				} = e, m = _(), p = Object(n.useCallback)(() => {
					d(c(l.id, "title", i)), i && m(i)
				}, [d, i, l]), b = Object(n.useCallback)(() => {
					d(c(l.id, "visit", i)), i && m(i)
				}, [d, i, l]);
				return l && u ? s.a.createElement(R, {
					className: t,
					id: o,
					style: a
				}, s.a.createElement(K, null, s.a.createElement(H, null, s.a.createElement(B, {
					subredditOrProfile: l,
					shouldHideNsfwIcon: r
				}), s.a.createElement(k, {
					onClick: p,
					to: `${l.url}`
				}, l.displayText)), s.a.createElement(q, {
					subredditAboutInfo: u
				}), s.a.createElement(x.a, {
					subreddit: l
				}), s.a.createElement(w, null, Object(N.a)(u.publicDescription || "", 140)), s.a.createElement(j.k, {
					onClick: b,
					to: `${l.url}`
				}, g._("View Community", null, {
					hk: "3TWTGC"
				})), s.a.createElement(O.h, {
					id: l.id,
					type: "subreddit"
				}))) : s.a.createElement(R, {
					style: a
				})
			});
			var W = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return s.a.createElement(F, P({
					isOpen: t
				}, e))
			};
			const Z = Object(m.c)({
				activeTooltipId: v.a,
				hideNSFWPref: h.B,
				subreddit: b.y,
				subredditAboutInfo: b.v
			});
			var Q = Object(u.b)(Z, e => ({
				onHideTooltip: () => e(Object(p.i)())
			}))(Object(d.c)(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(W, {
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
			const X = "SubredditInfoTooltip";
			class J extends s.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(l(this.props.subredditName, this.props.postId))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						itemId: e.postId,
						subredditName: e.subredditName,
						tooltipIdPrefix: X,
						tooltipType: e.tooltipType
					}), r = `${t}-hover-id`;
					return s.a.createElement(i.b, {
						hoverId: r,
						sendHoverEvent: this.sendEvent,
						authorOrSubredditName: e.subredditName,
						tooltipId: t
					}, e.children, s.a.createElement(Q, {
						className: e.className,
						hoverId: r,
						postId: e.postId,
						subredditName: e.subredditName,
						tooltipId: t,
						tooltipPosition: e.tooltipPosition,
						tooltipType: e.tooltipType
					}))
				}
			}
			t.default = Object(d.c)(J)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				o = r("./src/reddit/components/Hovercards/helpers.m.less"),
				i = r.n(o);
			const d = n.a.wrapped(s.a, "UserActionItem", i.a),
				a = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: o
					} = e;
					let i = s;
					return r && (i = `${i}--${r}`), o && (i = `${i}--${o}`), t && (i = `${i}--${t}`), n && (i = `${i}--${n}`), i
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "i", (function() {
				return C
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./node_modules/lodash/isNil.js"),
				a = r.n(d),
				c = r("./src/reddit/constants/jsapiEvents.ts");
			var l = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class m extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: r,
								...n
							}
						} = this;
						l.a.publish(c.a, n, e)
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
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(m),
				b = r("./src/reddit/selectors/comments.ts"),
				v = r("./src/reddit/selectors/commentSelector.ts"),
				h = r("./src/reddit/selectors/subreddit.ts");
			const y = (e, t) => {
				const r = Object(v.a)(e, t),
					n = Object(h.H)(e, t);
				return {
					comment: r,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var f = Object(o.b)(() => Object(i.a)(y, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
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
			const E = (e, t) => {
				const r = Object(v.a)(e, t),
					n = Object(h.H)(e, t);
				return {
					comment: r,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var x = Object(o.b)(() => Object(i.a)(E, e => e))(e => s.a.createElement(p, {
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
					subreddit: h.S
				}))(e => s.a.createElement(p, {
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
				I = r("./src/reddit/hooks/usePostContext.ts");
			var S = e => {
				const {
					post: t,
					subredditOrProfile: r
				} = Object(I.a)(), o = Object(n.useMemo)(() => ({
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
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, r]);
				return s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: o
				})
			};
			var j = e => {
				const {
					post: t,
					subredditOrProfile: r,
					isModerator: o
				} = Object(I.a)(), i = Object(n.useMemo)(() => ({
					author: t.author,
					isModerator: o,
					post: {
						id: t.id
					},
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {}
				}), [t, r, o]);
				return s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: i
				})
			};
			var N = e => {
				const {
					post: t,
					subredditOrProfile: r
				} = Object(I.a)(), o = Object(n.useMemo)(() => ({
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
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, r]);
				return s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: o
				})
			};
			var _ = Object(o.b)(() => Object(i.c)({
				subreddit: h.S
			}))(e => s.a.createElement(p, {
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
			var T = Object(o.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(h.K)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
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
			var C = Object(o.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(h.S)(e, {
					subredditId: t
				}) : null
			}))(e => s.a.createElement(p, {
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
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, r) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "n", (function() {
				return S
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "p", (function() {
				return N
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "g", (function() {
				return B
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/controls/Button/index.m.less"),
				a = r.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = {
				role: "button",
				tabIndex: 0
			};
			var u, m, p, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const v = e => {
					const {
						"data-redditstyle": t,
						Icon: r,
						iconPosition: n = p.C,
						isFullWidth: i = !1,
						isSquare: d = !1,
						children: v,
						className: E,
						kind: x = b.Button,
						priority: O = m.Primary,
						redditStyle: I,
						size: S = u.S,
						text: j,
						...N
					} = e, _ = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: r,
						Icon: n,
						isFullWidth: s,
						isSquare: i,
						priority: d,
						size: c,
						text: l
					}) => Object(o.a)(e, a.a.Button, d && a.a[d], c && a.a[c], {
						[a.a.isFullWidth]: s,
						[a.a.isIconOnly]: !!n && !l,
						[a.a.isSquare]: i,
						[a.a.redditStyle]: !(!t && !r)
					}))({
						baseClassName: E,
						children: v,
						dataRedditStyle: t,
						Icon: r,
						isFullWidth: i,
						isSquare: d,
						priority: O,
						redditStyle: I,
						size: S,
						text: j
					}), T = (({
						children: e,
						text: t,
						Icon: r,
						iconPosition: n,
						priority: i
					}) => !r && t ? s.a.createElement("span", null, t) : s.a.createElement(s.a.Fragment, null, r && (n === p.C || n === p.L) && s.a.createElement(r, {
						className: Object(o.a)(a.a.Icon, {
							[a.a.isLeft]: n === p.L
						}),
						isFilled: i === m.Primary
					}), t && s.a.createElement("span", {
						className: a.a.Text
					}, t), e && e, r && n === p.R && s.a.createElement(r, {
						className: Object(o.a)(a.a.Icon, a.a.isRight),
						isFilled: i === m.Primary
					})))({
						children: v,
						text: j,
						Icon: r,
						iconPosition: n,
						priority: O
					});
					return x === b.InternalLink && (e => "to" in e)(N) ? s.a.createElement(h, c({}, l, N, {
						className: _
					}), T) : x === b.ExternalLink && (e => "href" in e)(N) ? s.a.createElement(y, c({}, l, N, {
						className: _
					}), T) : s.a.createElement(f, c({}, l, N, {
						className: _
					}), T)
				},
				h = e => s.a.createElement(i.a, e),
				y = e => s.a.createElement("a", e),
				f = e => s.a.createElement("button", e),
				E = e => s.a.createElement(v, c({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				x = e => s.a.createElement(v, c({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				O = e => s.a.createElement(v, c({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				I = e => s.a.createElement(v, c({
					kind: b.ExternalLink,
					priority: m.Secondary
				}, e)),
				S = e => s.a.createElement(v, c({
					kind: b.InternalLink,
					priority: m.Secondary
				}, e)),
				j = e => s.a.createElement(v, c({
					kind: b.Button,
					priority: m.Secondary
				}, e)),
				N = e => s.a.createElement(v, c({
					kind: b.InternalLink,
					priority: m.Plain
				}, e)),
				_ = e => s.a.createElement(v, c({
					kind: b.Button,
					priority: m.Plain
				}, e)),
				T = ({
					className: e,
					...t
				}) => s.a.createElement(v, c({
					kind: b.Button,
					priority: m.Primary,
					className: Object(o.a)(e, a.a.DangerButtonColors)
				}, t)),
				C = ({
					className: e,
					...t
				}) => s.a.createElement(v, c({
					kind: b.Button,
					className: Object(o.a)(e, a.a.GoldButtonColors)
				}, t)),
				P = ({
					className: e,
					...t
				}) => s.a.createElement(v, c({
					kind: b.Button,
					className: Object(o.a)(e, a.a.PremiumButtonColors)
				}, t)),
				g = ({
					className: e,
					...t
				}) => s.a.createElement(v, c({
					kind: b.Button,
					className: Object(o.a)(e, a.a.ChatButton)
				}, t)),
				B = ({
					className: e,
					...t
				}) => s.a.createElement(v, c({
					kind: b.Button,
					className: Object(o.a)(e, a.a.InlineTextButton)
				}, t));
			t.q = v
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/controls/IconTooltip/index.m.less"),
				a = r.n(d);
			const c = Object(o.a)(i.b),
				l = ["center", "top"],
				u = ["center", "bottom"];
			class m extends s.a.Component {
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
					return s.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, s.a.createElement(c, {
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
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, r) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.m.less"),
				o = r.n(s);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./src/lib/fastdom/index.ts"),
				o = r("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				d = "jsapi.consumer",
				a = "/r/redesign/wiki/jsapi";
			var c = r("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${d}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(c.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === d && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${n.a.redditUrl}${a}`, e))
					} catch (r) {
						return void console.error(i, `${n.a.redditUrl}${a}`, r)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, r) {
					const n = {
						name: e,
						props: t,
						element: r
					};
					this.queue.push(n), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditHovercard.1b94721ab7d7ec414f4b.js.map
// https://www.redditstatic.com/desktop2x/SubredditHovercard.a1eea320251c84666bd9.js
// Retrieved at 1/18/2020, 8:15:20 AM by Reddit Dataminer v1.0.0
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/Flair/index.tsx"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/IconTooltip/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				m = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				p = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				b = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/components/CommunityType/index.m.less"),
				x = s.n(f);
			const y = s("./src/lib/lessComponent.tsx").a.span("TypeLabel", x.a),
				j = Object(d.c)({
					restrictions: E.o
				}),
				I = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i.b, {
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}), o.a.createElement("span", {
					className: x.a.nsfwText
				}, Object(l.c)("Adult content"))),
				g = () => o.a.createElement(y, null, o.a.createElement(b.a, {
					className: x.a.quarantinedIcon
				}), o.a.createElement("span", null, Object(l.c)("Quarantined"))),
				T = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, e.subreddit.isNSFW && o.a.createElement(I, null)), o.a.createElement(y, {
					className: e.className
				}, e.description ? o.a.createElement(c.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, o.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && o.a.createElement(g, null)),
				N = Object(n.b)(j);
			t.a = N(e => {
				let {
					className: t,
					iconClassName: s,
					restrictions: r = O.e.Post,
					textClassName: n,
					subreddit: i
				} = e;
				switch (i.type) {
					case h.b.Restricted:
						return o.a.createElement(T, {
							className: t,
							icon: o.a.createElement(m.a, {
								className: Object(a.a)(x.a.restrictedIcon, s)
							}),
							text: Object(l.c)("Restricted"),
							textClassName: n,
							description: Object(O.g)(r),
							subreddit: i
						});
					case h.b.Private:
						return o.a.createElement(T, {
							className: t,
							icon: o.a.createElement(p.a, {
								className: Object(a.a)(x.a.privateIcon, s)
							}),
							text: Object(l.c)("Private"),
							textClassName: n,
							description: Object(l.c)("Only approved users can view and submit to this community"),
							subreddit: i
						});
					case h.b.EmployeesOnly:
						return o.a.createElement(T, {
							className: t,
							icon: o.a.createElement(u.a, {
								className: Object(a.a)(x.a.employeesIcon, s)
							}),
							text: i.allowContractors ? Object(l.c)("Employees & Contractors") : Object(l.c)("Employees Only"),
							textClassName: n,
							subreddit: i
						});
					default:
						return o.a.createElement(o.a.Fragment, null, i.isQuarantined && o.a.createElement(g, null), i.isNSFW && o.a.createElement(I, null))
				}
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, s) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(i.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.h)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(a.d)(t.authorOrSubredditName))
					}
				})),
				p = s("./src/reddit/actions/subreddit.ts");
			const b = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(i.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.h)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.v)(t.authorOrSubredditName))
					}
				})),
				h = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				O = s.n(h);
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			}));
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || (this.props.onOpenUserDropdown(), this.props.sendHoverEvent())
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
					return o.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const f = n.a.wrapped(E, "HoverDiv", O.a),
				x = m(f),
				y = v(f)
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
				o = s.n(r),
				n = s("./src/reddit/components/Hovercards/helpers.ts"),
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
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/lib/lessComponent.tsx"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				y = s("./src/reddit/components/CommunityType/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				T = s("./src/reddit/controls/Button/index.tsx"),
				N = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				C = s("./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less"),
				w = s.n(C);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = E.a.wrapped(g.b, "SubredditIcon", w.a),
				P = E.a.wrapped(O.a, "SubredditNameDisplay", w.a),
				H = E.a.div("SubredditDescription", w.a),
				M = E.a.div("SubredditNameContainer", w.a),
				A = E.a.div("SubredditInfoContainer", w.a),
				L = E.a.div("Subscribers", w.a),
				B = E.a.div("Online", w.a),
				D = E.a.div("Count", w.a),
				U = E.a.div("CountLabel", w.a),
				k = E.a.div("Container", w.a),
				R = E.a.div("CardContainer", w.a),
				Z = e => o.a.createElement(A, null, o.a.createElement(L, null, o.a.createElement(D, null, Object(f.b)(e.subredditAboutInfo.subscribers)), o.a.createElement(U, null, o.a.createElement(x.c, null, "Members"))), o.a.createElement(B, null, o.a.createElement(D, null, Object(f.b)(e.subredditAboutInfo.accountsActive)), o.a.createElement(U, null, o.a.createElement(x.c, null, "Online")))),
				J = Object(I.a)(e => {
					const {
						className: t,
						hideNSFWPref: s,
						hoverId: r,
						language: n,
						postId: i,
						style: d,
						subreddit: a,
						subredditAboutInfo: l
					} = e;
					return a && l ? o.a.createElement(k, {
						className: t,
						id: r,
						style: d
					}, o.a.createElement(R, null, o.a.createElement(M, null, o.a.createElement(_, {
						subredditOrProfile: a,
						shouldHideNsfwIcon: s
					}), o.a.createElement(P, {
						onClick: () => e.sendEvent(c(a.id, "title", i)),
						to: "".concat(a.url)
					}, a.displayText)), o.a.createElement(Z, {
						language: n,
						subredditAboutInfo: l
					}), o.a.createElement(y.a, {
						subreddit: a
					}), o.a.createElement(H, null, Object(N.a)(l.publicDescription || "", 140)), o.a.createElement(T.h, {
						onClick: () => e.sendEvent(c(a.id, "visit", i)),
						to: "".concat(a.url)
					}, o.a.createElement(x.c, null, "View Community")), o.a.createElement(j.h, {
						id: a.id,
						type: "subreddit"
					}))) : o.a.createElement(k, {
						style: d
					})
				});
			var K = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return o.a.createElement(J, S({
					isOpen: t
				}, e))
			};
			const V = Object(m.c)({
				activeTooltipId: v.a,
				hideNSFWPref: h.z,
				language: h.S,
				subreddit: b.B,
				subredditAboutInfo: b.y
			});
			var z = Object(u.b)(V, e => ({
				onHideTooltip: () => e(Object(p.h)())
			}))(Object(d.b)(e => o.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, o.a.createElement(K, {
				activeTooltipId: e.activeTooltipId,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				language: e.language,
				onHideTooltip: e.onHideTooltip,
				postId: e.postId,
				sendEvent: e.sendEvent,
				subreddit: e.subreddit,
				subredditAboutInfo: e.subredditAboutInfo,
				tooltipId: e.tooltipId,
				tooltipPosition: e.tooltipPosition,
				tooltipType: e.tooltipType
			}))));
			const F = "SubredditInfoTooltip";
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(l(this.props.subredditName, this.props.postId))
				}
				render() {
					const {
						props: e
					} = this, t = Object(n.b)({
						itemId: e.postId,
						subredditName: e.subredditName,
						tooltipIdPrefix: F,
						tooltipType: e.tooltipType
					}), s = "".concat(t, "-hover-id");
					return o.a.createElement(i.b, {
						hoverId: s,
						sendHoverEvent: this.sendEvent,
						authorOrSubredditName: e.subredditName,
						tooltipId: t
					}, e.children, o.a.createElement(z, {
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
			t.default = Object(d.b)(W)
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
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				n = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(n);
			const d = r.a.wrapped(o.a, "UserActionItem", i.a),
				a = e => {
					const {
						author: t,
						itemId: s,
						subredditName: r,
						tooltipIdPrefix: o,
						tooltipType: n
					} = e;
					let i = o;
					return s && (i = "".concat(i, "--").concat(s)), n && (i = "".concat(i, "--").concat(n)), t && (i = "".concat(i, "--").concat(t)), r && (i = "".concat(i, "--").concat(r)), i
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				a = s.n(d),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
					}
					return s
				};
			const m = Object(i.c)({
				consumers: e => e.jsApi
			});
			class p extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: r
							} = t,
							o = u(t, ["className", "consumers"]);
						l.a.publish(c.a, o, e)
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
					return e.consumers.length ? o.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && o.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(n.b)(m, {})(p),
				v = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const O = (e, t) => {
				const s = Object(v.n)(e, t),
					r = Object(h.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(n.b)(() => Object(i.a)(O, v.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => o.a.createElement(b, {
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
				const s = Object(v.n)(e, t),
					r = Object(h.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(n.b)(() => Object(i.a)(f, e => e))(e => o.a.createElement(b, {
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
			var y = Object(n.b)(() => Object(i.c)({
					subreddit: h.S
				}))(e => o.a.createElement(b, {
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
				j = s("./src/reddit/selectors/posts.ts");
			var I = Object(n.b)(() => Object(i.c)({
				post: j.J,
				subredditOrProfile: j.U,
				isModerator: (e, t) => {
					const s = Object(j.U)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => o.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var g = Object(n.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(j.U)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(j.U)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => o.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var T = Object(n.b)(() => Object(i.c)({
				post: j.J,
				subredditOrProfile: j.U,
				isModerator: (e, t) => {
					const s = Object(j.U)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => o.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var N = Object(n.b)(() => Object(i.c)({
				subreddit: h.S
			}))(e => o.a.createElement(b, {
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
			var C = Object(n.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(h.M)(e, {
					identifier: t
				})
			}))(e => o.a.createElement(b, {
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
			var w = Object(n.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(h.S)(e, {
						subredditId: s
					}) : null
				}
			}))(e => o.a.createElement(b, {
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
			}));
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return w
			}))
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/controls/IconTooltip/index.m.less"),
				a = s.n(d);
			const c = Object(n.a)(i.b),
				l = ["center", "top"],
				u = ["center", "bottom"];
			t.a = class extends o.a.Component {
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
					return o.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, o.a.createElement(c, {
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
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
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
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(n.a)(e.className, d.a.admin, {
					[d.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && o.a.createElement("title", null, e.title), e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);

			function n(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", {
					fillRule: "evenodd"
				}, o.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), o.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		}
	}
]);
//# sourceMappingURL=SubredditHovercard.a1eea320251c84666bd9.js.map
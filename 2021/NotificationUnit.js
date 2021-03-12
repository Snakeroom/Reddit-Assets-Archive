// https://www.redditstatic.com/desktop2x/NotificationUnit.15d57bef6d06b491910b.js
// Retrieved at 3/11/2021, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = a("./node_modules/react/index.js"),
				i = a.n(s),
				o = a("./src/lib/classNames/index.ts"),
				l = a("./src/config.ts"),
				r = a("./src/lib/lessComponent.tsx"),
				c = a("./src/reddit/icons/svgs/Chat/index.tsx");
			var d = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("path", {
					d: "M16 2H4a2 2 0 00-2 2v9a2 2 0 002 2h3.38l2.25 2.57a.5.5 0 00.75 0L12.63 15H16a2 2 0 002-2V4a2 2 0 00-2-2z"
				})),
				m = a("./src/reddit/icons/svgs/Heart/index.tsx");
			var p = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, i.a.createElement("path", {
					d: "M3.626,4.5H2.376A2.629,2.629,0,0,1,5,1.875h8v1.25H5A1.377,1.377,0,0,0,3.626,4.5Z"
				}), i.a.createElement("path", {
					d: "M19.294,7.206a1.116,1.116,0,0,0-.793-.328h-.009l-1.9.014a2.619,2.619,0,0,0-1.426.434L13.626,8.339V7A1.127,1.127,0,0,0,12.5,5.875H1.5A1.127,1.127,0,0,0,.376,7v3.494a8.31,8.31,0,0,1,1.25.219V7.125h10.75v3.536L15.851,8.37h0a1.369,1.369,0,0,1,.746-.227l1.778-.013V15.87L16.6,15.857a1.364,1.364,0,0,1-.747-.227l-3.475-2.291v3.536H7.805a8.443,8.443,0,0,1,.223,1.25H12.5A1.127,1.127,0,0,0,13.626,17V15.661l1.536,1.013a2.618,2.618,0,0,0,1.426.433l1.9.014a1.025,1.025,0,0,0,.8-.327,1.116,1.116,0,0,0,.332-.8V8A1.116,1.116,0,0,0,19.294,7.206Z"
				}), i.a.createElement("path", {
					d: "M.374,11.877v1.275a5.856,5.856,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,11.877Z"
				}), i.a.createElement("path", {
					d: "M.374,14.541v1.29a3.219,3.219,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.541Z"
				}))),
				u = a("./src/reddit/icons/svgs/Notify/index.tsx"),
				E = a("./src/reddit/icons/svgs/Redditor/index.tsx");
			var v = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M18.5 4h-6a.5.5 0 00-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 00-1.41 0L.65 13.65a.5.5 0 000 .71l2 2a.5.5 0 00.71 0l4.14-4.15 2.29 2.29a1 1 0 001.41 0l5.3-5.29 1.65 1.65a.5.5 0 00.85-.36v-6a.5.5 0 00-.5-.5z"
			}));
			var b = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("rect", {
				x: "1.96",
				y: "12",
				width: "4",
				height: "6",
				rx: ".5",
				ry: ".5"
			}), i.a.createElement("rect", {
				x: "13.96",
				y: "9",
				width: "4",
				height: "9",
				rx: ".5",
				ry: ".5"
			}), i.a.createElement("path", {
				d: "M14 5.5a.5.5 0 00.35-.85l-4-4a.5.5 0 00-.71 0l-4 4A.5.5 0 006 5.5h2v12a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-12z"
			}));
			var g = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M17 4h-2V3a1 1 0 00-1-1H6a1 1 0 00-1 1v1H3a1 1 0 00-1 1v3.28a2 2 0 00.77 1.57l3 2.45A5 5 0 009 14.68V17H7a1 1 0 000 2h6a1 1 0 000-2h-2v-2.32a5 5 0 003.22-2.38l3-2.42a2 2 0 00.78-1.6V5a1 1 0 00-1-1zM4 6h1v3.09l-1-.81zm12 2.3l-1 .79V6h1z"
			}));
			var f = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("path", {
					d: "M17.57 9.31l-7.21-7.65a.52.52 0 00-.73 0l-7.2 7.65A1 1 0 003.16 11H7v6.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V11h3.84a1 1 0 00.73-1.69z"
				})),
				w = a("./src/reddit/models/NotificationInbox/index.ts"),
				N = a("./src/reddit/components/NotificationUnit/index.m.less"),
				h = a.n(N);
			const x = r.a.wrapped(c.a, "NotifIcon", h.a),
				T = r.a.wrapped(d, "NotifIcon", h.a),
				O = r.a.wrapped(m.a, "NotifIcon", h.a),
				M = r.a.wrapped(p, "NotifIcon", h.a),
				A = r.a.wrapped(u.a, "NotifIcon", h.a),
				I = r.a.wrapped(E.a, "RedditorIcon", h.a),
				_ = r.a.wrapped(e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, i.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M10.934 5.208C10.16 3.365 7.503 2.586 5.1 2.613v-.812a.593.593 0 00-.358-.55.595.595 0 00-.647.107L.997 4.198a.302.302 0 000 .442l3.098 2.84a.594.594 0 00.647.106.593.593 0 00.358-.55V6.21c1.914-.075 3.025.186 3.462.83.422.621.276 1.716-.434 3.255a.3.3 0 00.478.343c2.728-2.576 2.772-4.374 2.328-5.429",
					fill: "inherit"
				})), "NotifIcon", h.a),
				C = r.a.wrapped(v, "NotifIcon", h.a),
				y = r.a.wrapped(b, "NotifIcon", h.a),
				H = r.a.wrapped(g, "NotifIcon", h.a),
				S = r.a.wrapped(f, "NotifIcon", h.a),
				U = `${l.a.assetPath}/img/cake_day.png`,
				R = e => {
					const {
						avatar: t,
						iconType: a,
						messageType: n
					} = e, s = (e => {
						switch (e) {
							case w.b.Chat:
								return i.a.createElement(x, null);
							case w.b.Comment:
								return i.a.createElement(T, null);
							case w.b.Heart:
								return i.a.createElement(O, null);
							case w.b.Live:
								return i.a.createElement(M, null);
							case w.b.Redditor:
								return i.a.createElement(I, null);
							case w.b.Reply:
								return i.a.createElement(_, null);
							case w.b.SortRising:
								return i.a.createElement(C, null);
							case w.b.SortTop:
								return i.a.createElement(y, null);
							case w.b.Trophy:
								return i.a.createElement(H, null);
							case w.b.Upvote:
								return i.a.createElement(S, null);
							default:
								return i.a.createElement(A, null)
						}
					})(a), o = n === w.a.CakeDay, l = t && t.isNsfw, r = t && t.url;
					return i.a.createElement("span", {
						className: h.a.avatarContainer
					}, ((e, t, a) => t ? i.a.createElement("span", {
						className: h.a.nsfwAvatar
					}, "18+") : e ? i.a.createElement("img", {
						alt: "Slice of cake for cake day",
						className: h.a.avatar,
						src: U
					}) : i.a.createElement("img", {
						className: h.a.avatar,
						src: a || ""
					}))(o, l, r), i.a.createElement("span", {
						className: h.a.notificationIconContainer
					}, s))
				};
			var k, D = a("./node_modules/fbt/lib/FbtPublic.js"),
				L = a("./src/higherOrderComponents/addOverlayEvents.tsx"),
				j = a("./src/higherOrderComponents/asTooltip.tsx"),
				P = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				V = a("./src/reddit/controls/Dropdown/index.tsx"),
				B = a("./node_modules/react-redux/es/index.js"),
				F = a("./src/reddit/selectors/experiments/inboxRedesign.ts");
			! function(e) {
				e.HideMessageType = "HideMessageType", e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates"
			}(k || (k = {}));
			const Z = r.a.wrapped(V.a, "StyledDropdown", h.a),
				z = Object(j.a)(Z),
				Y = Object(P.a)(Z, [L.a.Click]),
				K = e => {
					const {
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: a,
						hideNotification: n,
						isInTooltip: o,
						isHideNotifEligible: l,
						isOpen: r,
						isToggleMessageTypeEligible: c,
						isToggleNotificationUpdateEligible: d,
						isToggleUpdateFromSubredditEligible: m,
						hideSubredditNotifications: p,
						sendInboxViewOverflow: u,
						tooltipId: E
					} = e, v = Object(B.e)(F.a);
					Object(s.useEffect)(() => {
						r && u()
					}, [r]);
					const b = e => {
							let s;
							switch (e) {
								case k.HideNotif:
									s = {
										text: D.fbt._("Hide this notification", null, {
											hk: "4F7TDr"
										}),
										handler: n
									};
									break;
								case k.HideSubUpdates:
									s = {
										text: D.fbt._("Disable updates from this community", null, {
											hk: "2mvqrp"
										}),
										handler: p
									};
									break;
								case k.HideMessageType:
									s = {
										text: D.fbt._("Turn off this notification type", null, {
											hk: "s60ek"
										}),
										handler: t
									};
									break;
								case k.HideNotifUpdate:
									s = {
										text: D.fbt._("Don't get updates on this", null, {
											hk: "L7aUS"
										}),
										handler: a
									};
									break;
								default:
									s = null
							}
							if (!s) return;
							const {
								handler: o,
								text: l
							} = s;
							return i.a.createElement("button", {
								className: h.a.overflowMenuOption,
								onClick: o
							}, l)
						},
						g = o ? Y : z;
					return i.a.createElement(g, {
						id: E,
						isOverlayOff: !0,
						isOpen: r,
						tooltipId: E,
						tooltipPosition: ["right", "top"]
					}, i.a.createElement("div", {
						className: h.a.overflowMenuContainer
					}, l && b(k.HideNotif), m && !v && b(k.HideSubUpdates), c && !v && b(k.HideMessageType), d && b(k.HideNotifUpdate)))
				};
			var G = a("./src/reddit/controls/MetaData/index.tsx");
			var W = e => i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM1.625,10A8.327,8.327,0,0,1,3.66,4.544l11.8,11.8A8.363,8.363,0,0,1,1.625,10ZM16.34,15.456,4.544,3.66a8.363,8.363,0,0,1,11.8,11.8Z"
				})),
				$ = a("./src/reddit/icons/svgs/Trash2/index.tsx");
			const q = r.a.wrapped($.b, "StateIcon", h.a);
			q.displayName = "Trash";
			const J = r.a.wrapped(W, "StateIcon", h.a);
			J.displayName = "Remove";
			const Q = r.a.span("Text", h.a);
			Q.displayName = "PostUnavailableText";
			const X = r.a.div("PostUnavailableInfo", h.a),
				ee = e => {
					const {
						isNsfw: t,
						url: a
					} = e;
					return a ? t ? null : i.a.createElement("img", {
						className: h.a.postEmbedThumbnail,
						src: a
					}) : null
				},
				te = ({
					post: {
						thumbnail: e,
						removedByCategory: t,
						title: a,
						score: n = 0,
						commentCount: s = 0,
						isNsfw: l
					},
					isUnread: r
				}) => {
					const c = e && e.url,
						d = t === w.c.Deleted,
						m = t && t !== w.c.Deleted,
						p = Object(o.a)(h.a.postEmbedContainer, {
							[h.a.unread]: r
						}),
						u = Object(o.a)(h.a.postEmbedContent, {
							[h.a.deleted]: d || m
						});
					return i.a.createElement("span", {
						className: p
					}, i.a.createElement("span", {
						className: u
					}, i.a.createElement("span", null, i.a.createElement("p", {
						className: h.a.postEmbedTitle
					}, a), i.a.createElement("span", {
						className: h.a.postEmbedMeta
					}, !d && !m && i.a.createElement(i.a.Fragment, null, i.a.createElement(G.b, {
						isScoreHidden: !1,
						score: n,
						useUpvotes: !0
					}), i.a.createElement(G.c, null), Object(G.d)(s)), d && i.a.createElement(X, null, i.a.createElement(q, null), i.a.createElement(Q, null, D.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), m && i.a.createElement(X, null, i.a.createElement(J, null), i.a.createElement(Q, null, D.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), i.a.createElement(ee, {
						isNsfw: l,
						url: c
					})))
				};
			var ae = a("./src/lib/constants/index.ts"),
				ne = a("./src/lib/timeAgo/index.ts"),
				se = a("./src/reddit/icons/svgs/Menu/index.tsx");
			const ie = r.a.wrapped(se.a, "MenuIcon", h.a),
				oe = e => {
					const {
						dropdownId: t,
						isHideNotifEligible: a,
						isInTooltip: n,
						isOverflowMenuOpen: s,
						isToggleMessageTypeEligible: l,
						isToggleNotificationUpdateEligible: r,
						isToggleUpdateFromSubredditEligible: c,
						sendInboxClickOverflow: d,
						sentAt: m,
						setActiveOverflowMenuId: p,
						title: u
					} = e, E = a || l || r || c, v = Object(o.a)(h.a.menuButton, {
						[h.a.isOpen]: s
					}), b = Date.parse(m) / ae.Hb;
					return i.a.createElement("span", {
						className: h.a.topBar
					}, i.a.createElement("span", null, i.a.createElement("span", {
						className: Object(o.a)(h.a.title, {
							[h.a["m-tooltip"]]: n
						})
					}, u), i.a.createElement(G.c, null), i.a.createElement("span", {
						className: h.a.timeAgo
					}, Object(ne.a)(b, !0))), E && i.a.createElement("button", {
						"aria-expanded": s,
						"aria-haspopup": !0,
						className: v,
						id: t,
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), s ? p("") : (d(), p(t))
						}
					}, i.a.createElement(ie, null)))
				};
			var le = a("./src/reddit/controls/InternalLink/index.tsx"),
				re = a("./src/reddit/helpers/trackers/inbox.ts"),
				ce = a("./src/reddit/hooks/useTracking.ts"),
				de = a("./src/reddit/actions/toaster.ts"),
				me = a("./src/reddit/models/Toast/index.ts");
			t.default = e => {
				const t = Object(ce.a)(),
					a = Object(B.d)(),
					{
						activeOverflowMenuId: s,
						isInboxPostEmbedEnabled: l,
						isInTooltip: r,
						notification: c,
						setActiveOverflowMenuId: d,
						onItemClick: m
					} = e;
				if (!c) return null;
				const {
					avatar: p,
					body: u,
					context: E,
					deeplinkUrl: v,
					isHideNotifEligible: b,
					isToggleMessageTypeEligible: g,
					isToggleNotificationUpdateEligible: f,
					isToggleUpdateFromSubredditEligible: N,
					icon: x,
					id: T,
					readAt: O,
					sentAt: M,
					title: A
				} = c, I = E && E.messageType, _ = E && E.comment && E.comment.parent && E.comment.parent.id, C = E && E.post && E.post.id, y = E && E.post, H = E && E.subreddit && E.subreddit.id, S = !O, U = `notif-${r?"tooltip":""}-menu-${T}`, k = U === s, D = I === w.a.CommentReply ? _ : C, L = Object(o.a)(e.className, h.a.notificationItem, {
					[h.a.unread]: S
				}), j = {
					id: T,
					isClicked: !!O,
					isViewed: !0,
					type: I
				}, P = e => t(Object(re.h)({
					...j,
					actionInfoType: e
				})), V = e => {
					t(Object(re.q)({
						...j,
						actionInfoType: e
					}))
				}, F = () => {
					e.markNotificationAsRead(T, I)
				};
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("li", {
					className: L
				}, i.a.createElement(le.a, {
					className: h.a.link,
					onClick: e => {
						(null == y ? void 0 : y.removedByCategory) ? (e.preventDefault(), a(Object(de.f)({
							kind: me.b.Error,
							text: "Sorry, this content is no longer available.",
							duration: de.a
						}))) : r && m && m(), t(Object(re.f)(j))
					},
					onMouseDown: F,
					onKeyDown: F,
					to: v
				}, i.a.createElement(R, {
					avatar: p,
					iconType: x,
					messageType: I
				}), i.a.createElement("span", {
					className: h.a.contentContainer
				}, i.a.createElement(oe, {
					dropdownId: U,
					isHideNotifEligible: b,
					isInTooltip: r,
					isOverflowMenuOpen: k,
					isToggleMessageTypeEligible: g,
					isToggleNotificationUpdateEligible: f,
					isToggleUpdateFromSubredditEligible: N,
					sendInboxClickOverflow: () => t(Object(re.g)(j)),
					sentAt: M,
					setActiveOverflowMenuId: d,
					title: A
				}), l && y ? i.a.createElement(te, {
					post: y,
					isUnread: S
				}) : i.a.createElement("span", {
					className: h.a.body
				}, u)))), i.a.createElement(K, {
					disableMessageTypeNotifications: () => {
						const t = re.b.DisableNotificationType;
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.disableMessageTypeNotifications(I, () => V(t)), P(t)
					},
					disableNotificationUpdates: () => {
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.disableNotificationUpdates(D), P(re.b.HideSubreddit)
					},
					hideNotification: () => {
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.hideNotification(T), P(re.b.HideUpdates)
					},
					hideSubredditNotifications: () => {
						const t = re.b.HideSubreddit;
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.hideSubredditNotifications(H, () => V(t)), P(t)
					},
					isInTooltip: r,
					isHideNotifEligible: b,
					isOpen: k,
					isToggleMessageTypeEligible: !(!g || !I),
					isToggleNotificationUpdateEligible: f,
					isToggleUpdateFromSubredditEligible: !(!N || !H),
					sendInboxViewOverflow: () => t(Object(re.o)(j)),
					tooltipId: U
				}), i.a.createElement(n.a, {
					onChange: e => {
						e.isIntersecting && t(Object(re.n)(j))
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, i.a.createElement("div", null)))
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, a) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "c", (function() {
				return m
			})), a.d(t, "b", (function() {
				return p
			})), a.d(t, "d", (function() {
				return u
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				i = a.n(s),
				o = a("./src/lib/lessComponent.tsx"),
				l = a("./src/lib/prettyPrintNumber/index.ts"),
				r = (a("./src/lib/timeAgo/index.ts"), a("./src/reddit/controls/MetaData/index.m.less")),
				c = a.n(r);
			const d = o.a.span("metaText", c.a),
				m = e => i.a.createElement(d, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: a,
					...s
				}) => {
					const o = Object(l.b)(t),
						r = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						c = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? r : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return i.a.createElement(d, s, c)
				},
				u = e => i.a.createElement(d, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(l.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Heart/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10.8276 3.19995C9.44201 3.19995 8.55081 4.10635 7.99961 5.03835C7.44841 4.10635 6.55721 3.19995 5.17161 3.19995C2.96841 3.19995 1.59961 4.60315 1.59961 6.86235C1.59961 11.444 7.41401 14.2096 7.66121 14.3248C7.76841 14.3752 7.88441 14.4 7.99961 14.4C8.11561 14.4 8.23081 14.3752 8.33801 14.3248C8.58601 14.2096 14.3996 11.444 14.3996 6.86235C14.3996 4.60315 13.0308 3.19995 10.8276 3.19995"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Notify/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16 12.988c0 .554.449 1.002 1 1.002a1 1 0 110 2H3a1 1 0 110-2c.551 0 1-.448 1-1l.01-5.002A5.996 5.996 0 0110 2a5.997 5.997 0 015.99 5.99l.01 4.998zM8 16.99h4c0 1.103-.897 2-2 2s-2-.897-2-2z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				l = a.n(o);
			const r = e => s.a.createElement("svg", {
				className: Object(i.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = r
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, a) {
			"use strict";
			var n, s, i;
			a.d(t, "a", (function() {
					return n
				})), a.d(t, "b", (function() {
					return s
				})), a.d(t, "c", (function() {
					return i
				})),
				function(e) {
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(n || (n = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE"
				}(s || (s = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(i || (i = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.15d57bef6d06b491910b.js.map
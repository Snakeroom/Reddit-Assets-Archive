// https://www.redditstatic.com/desktop2x/NotificationUnit.c5b3b472189a5d35902c.js
// Retrieved at 3/9/2021, 6:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var i = a("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/config.ts"),
				l = a("./src/lib/lessComponent.tsx"),
				c = a("./src/reddit/icons/svgs/Chat/index.tsx");
			var d = e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
					d: "M16 2H4a2 2 0 00-2 2v9a2 2 0 002 2h3.38l2.25 2.57a.5.5 0 00.75 0L12.63 15H16a2 2 0 002-2V4a2 2 0 00-2-2z"
				})),
				m = a("./src/reddit/icons/svgs/Heart/index.tsx");
			var p = e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, s.a.createElement("path", {
					d: "M3.626,4.5H2.376A2.629,2.629,0,0,1,5,1.875h8v1.25H5A1.377,1.377,0,0,0,3.626,4.5Z"
				}), s.a.createElement("path", {
					d: "M19.294,7.206a1.116,1.116,0,0,0-.793-.328h-.009l-1.9.014a2.619,2.619,0,0,0-1.426.434L13.626,8.339V7A1.127,1.127,0,0,0,12.5,5.875H1.5A1.127,1.127,0,0,0,.376,7v3.494a8.31,8.31,0,0,1,1.25.219V7.125h10.75v3.536L15.851,8.37h0a1.369,1.369,0,0,1,.746-.227l1.778-.013V15.87L16.6,15.857a1.364,1.364,0,0,1-.747-.227l-3.475-2.291v3.536H7.805a8.443,8.443,0,0,1,.223,1.25H12.5A1.127,1.127,0,0,0,13.626,17V15.661l1.536,1.013a2.618,2.618,0,0,0,1.426.433l1.9.014a1.025,1.025,0,0,0,.8-.327,1.116,1.116,0,0,0,.332-.8V8A1.116,1.116,0,0,0,19.294,7.206Z"
				}), s.a.createElement("path", {
					d: "M.374,11.877v1.275a5.856,5.856,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,11.877Z"
				}), s.a.createElement("path", {
					d: "M.374,14.541v1.29a3.219,3.219,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.541Z"
				}))),
				u = a("./src/reddit/icons/svgs/Notify/index.tsx"),
				b = a("./src/reddit/icons/svgs/Redditor/index.tsx");
			var E = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M18.5 4h-6a.5.5 0 00-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 00-1.41 0L.65 13.65a.5.5 0 000 .71l2 2a.5.5 0 00.71 0l4.14-4.15 2.29 2.29a1 1 0 001.41 0l5.3-5.29 1.65 1.65a.5.5 0 00.85-.36v-6a.5.5 0 00-.5-.5z"
			}));
			var g = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("rect", {
				x: "1.96",
				y: "12",
				width: "4",
				height: "6",
				rx: ".5",
				ry: ".5"
			}), s.a.createElement("rect", {
				x: "13.96",
				y: "9",
				width: "4",
				height: "9",
				rx: ".5",
				ry: ".5"
			}), s.a.createElement("path", {
				d: "M14 5.5a.5.5 0 00.35-.85l-4-4a.5.5 0 00-.71 0l-4 4A.5.5 0 006 5.5h2v12a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-12z"
			}));
			var f = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M17 4h-2V3a1 1 0 00-1-1H6a1 1 0 00-1 1v1H3a1 1 0 00-1 1v3.28a2 2 0 00.77 1.57l3 2.45A5 5 0 009 14.68V17H7a1 1 0 000 2h6a1 1 0 000-2h-2v-2.32a5 5 0 003.22-2.38l3-2.42a2 2 0 00.78-1.6V5a1 1 0 00-1-1zM4 6h1v3.09l-1-.81zm12 2.3l-1 .79V6h1z"
			}));
			var v = e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
					d: "M17.57 9.31l-7.21-7.65a.52.52 0 00-.73 0l-7.2 7.65A1 1 0 003.16 11H7v6.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V11h3.84a1 1 0 00.73-1.69z"
				})),
				x = a("./src/reddit/models/NotificationInbox/index.ts"),
				w = a("./src/reddit/components/NotificationUnit/index.m.less"),
				N = a.n(w);
			const h = l.a.wrapped(c.a, "NotifIcon", N.a),
				O = l.a.wrapped(d, "NotifIcon", N.a),
				T = l.a.wrapped(m.a, "NotifIcon", N.a),
				M = l.a.wrapped(p, "NotifIcon", N.a),
				I = l.a.wrapped(u.a, "NotifIcon", N.a),
				_ = l.a.wrapped(b.a, "RedditorIcon", N.a),
				y = l.a.wrapped(e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, s.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M10.934 5.208C10.16 3.365 7.503 2.586 5.1 2.613v-.812a.593.593 0 00-.358-.55.595.595 0 00-.647.107L.997 4.198a.302.302 0 000 .442l3.098 2.84a.594.594 0 00.647.106.593.593 0 00.358-.55V6.21c1.914-.075 3.025.186 3.462.83.422.621.276 1.716-.434 3.255a.3.3 0 00.478.343c2.728-2.576 2.772-4.374 2.328-5.429",
					fill: "inherit"
				})), "NotifIcon", N.a),
				C = l.a.wrapped(E, "NotifIcon", N.a),
				H = l.a.wrapped(g, "NotifIcon", N.a),
				S = l.a.wrapped(f, "NotifIcon", N.a),
				A = l.a.wrapped(v, "NotifIcon", N.a),
				j = `${o.a.assetPath}/img/cake_day.png`,
				U = e => {
					const {
						avatar: t,
						iconType: a,
						messageType: i
					} = e, n = (e => {
						switch (e) {
							case x.b.Chat:
								return s.a.createElement(h, null);
							case x.b.Comment:
								return s.a.createElement(O, null);
							case x.b.Heart:
								return s.a.createElement(T, null);
							case x.b.Live:
								return s.a.createElement(M, null);
							case x.b.Redditor:
								return s.a.createElement(_, null);
							case x.b.Reply:
								return s.a.createElement(y, null);
							case x.b.SortRising:
								return s.a.createElement(C, null);
							case x.b.SortTop:
								return s.a.createElement(H, null);
							case x.b.Trophy:
								return s.a.createElement(S, null);
							case x.b.Upvote:
								return s.a.createElement(A, null);
							default:
								return s.a.createElement(I, null)
						}
					})(a), r = i === x.a.CakeDay, o = t && t.isNsfw, l = t && t.url;
					return s.a.createElement("span", {
						className: N.a.avatarContainer
					}, ((e, t, a) => t ? s.a.createElement("span", {
						className: N.a.nsfwAvatar
					}, "18+") : e ? s.a.createElement("img", {
						alt: "Slice of cake for cake day",
						className: N.a.avatar,
						src: j
					}) : s.a.createElement("img", {
						className: N.a.avatar,
						src: a || ""
					}))(r, o, l), s.a.createElement("span", {
						className: N.a.notificationIconContainer
					}, n))
				};
			var R, k = a("./node_modules/fbt/lib/FbtPublic.js"),
				L = a("./src/higherOrderComponents/addOverlayEvents.tsx"),
				D = a("./src/higherOrderComponents/asTooltip.tsx"),
				P = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				V = a("./src/reddit/controls/Dropdown/index.tsx"),
				B = a("./node_modules/react-redux/es/index.js"),
				F = a("./src/reddit/selectors/experiments/inboxRedesign.ts");
			! function(e) {
				e.HideMessageType = "HideMessageType", e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates"
			}(R || (R = {}));
			const z = l.a.wrapped(V.a, "StyledDropdown", N.a),
				Y = Object(D.a)(z),
				Z = Object(P.a)(z, [L.a.Click]),
				G = e => {
					const {
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: a,
						hideNotification: i,
						isInTooltip: r,
						isHideNotifEligible: o,
						isOpen: l,
						isToggleMessageTypeEligible: c,
						isToggleNotificationUpdateEligible: d,
						isToggleUpdateFromSubredditEligible: m,
						hideSubredditNotifications: p,
						sendInboxViewOverflow: u,
						tooltipId: b
					} = e, E = Object(B.e)(F.a);
					Object(n.useEffect)(() => {
						l && u()
					}, [l]);
					const g = e => {
							let n;
							switch (e) {
								case R.HideNotif:
									n = {
										text: k.fbt._("Hide this notification", null, {
											hk: "4F7TDr"
										}),
										handler: i
									};
									break;
								case R.HideSubUpdates:
									n = {
										text: k.fbt._("Disable updates from this community", null, {
											hk: "2mvqrp"
										}),
										handler: p
									};
									break;
								case R.HideMessageType:
									n = {
										text: k.fbt._("Turn off this notification type", null, {
											hk: "s60ek"
										}),
										handler: t
									};
									break;
								case R.HideNotifUpdate:
									n = {
										text: k.fbt._("Don't get updates on this", null, {
											hk: "L7aUS"
										}),
										handler: a
									};
									break;
								default:
									n = null
							}
							if (!n) return;
							const {
								handler: r,
								text: o
							} = n;
							return s.a.createElement("button", {
								className: N.a.overflowMenuOption,
								onClick: r
							}, o)
						},
						f = r ? Z : Y;
					return s.a.createElement(f, {
						id: b,
						isOverlayOff: !0,
						isOpen: l,
						tooltipId: b,
						tooltipPosition: ["right", "top"]
					}, s.a.createElement("div", {
						className: N.a.overflowMenuContainer
					}, o && g(R.HideNotif), m && !E && g(R.HideSubUpdates), c && !E && g(R.HideMessageType), d && g(R.HideNotifUpdate)))
				};
			var K = a("./src/reddit/controls/MetaData/index.tsx");
			const W = e => {
					const {
						isNsfw: t,
						url: a
					} = e;
					return a ? t ? null : s.a.createElement("img", {
						className: N.a.postEmbedThumbnail,
						src: a
					}) : null
				},
				$ = e => {
					const {
						post: t,
						isUnread: a
					} = e, i = t.thumbnail && t.thumbnail.url, n = Object(r.a)(N.a.postEmbedContainer, {
						[N.a.unread]: a
					});
					return s.a.createElement("span", {
						className: n
					}, s.a.createElement("span", null, s.a.createElement("p", {
						className: N.a.postEmbedTitle
					}, t.title), s.a.createElement("span", {
						className: N.a.postEmbedMeta
					}, s.a.createElement(K.b, {
						isScoreHidden: !1,
						score: t.score || 0,
						useUpvotes: !0
					}), s.a.createElement(K.c, null), Object(K.d)(t.commentCount || 0))), s.a.createElement(W, {
						isNsfw: t.isNsfw,
						url: i
					}))
				};
			var J = a("./src/lib/constants/index.ts"),
				q = a("./src/lib/timeAgo/index.ts"),
				Q = a("./src/reddit/icons/svgs/Menu/index.tsx");
			const X = l.a.wrapped(Q.a, "MenuIcon", N.a),
				ee = e => {
					const {
						dropdownId: t,
						isHideNotifEligible: a,
						isInTooltip: i,
						isOverflowMenuOpen: n,
						isToggleMessageTypeEligible: o,
						isToggleNotificationUpdateEligible: l,
						isToggleUpdateFromSubredditEligible: c,
						sendInboxClickOverflow: d,
						sentAt: m,
						setActiveOverflowMenuId: p,
						title: u
					} = e, b = a || o || l || c, E = Object(r.a)(N.a.menuButton, {
						[N.a.isOpen]: n
					}), g = Date.parse(m) / J.Hb;
					return s.a.createElement("span", {
						className: N.a.topBar
					}, s.a.createElement("span", null, s.a.createElement("span", {
						className: Object(r.a)(N.a.title, {
							[N.a["m-tooltip"]]: i
						})
					}, u), s.a.createElement(K.c, null), s.a.createElement("span", {
						className: N.a.timeAgo
					}, Object(q.a)(g, !0))), b && s.a.createElement("button", {
						"aria-expanded": n,
						"aria-haspopup": !0,
						className: E,
						id: t,
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), n ? p("") : (d(), p(t))
						}
					}, s.a.createElement(X, null)))
				};
			var te = a("./src/reddit/controls/InternalLink/index.tsx"),
				ae = a("./src/reddit/helpers/trackers/inbox.ts"),
				ie = a("./src/reddit/hooks/useTracking.ts");
			t.default = e => {
				const t = Object(ie.a)(),
					{
						activeOverflowMenuId: a,
						isInboxPostEmbedEnabled: n,
						isInTooltip: o,
						notification: l,
						setActiveOverflowMenuId: c
					} = e;
				if (!l) return null;
				const {
					avatar: d,
					body: m,
					context: p,
					deeplinkUrl: u,
					isHideNotifEligible: b,
					isToggleMessageTypeEligible: E,
					isToggleNotificationUpdateEligible: g,
					isToggleUpdateFromSubredditEligible: f,
					icon: v,
					id: w,
					readAt: h,
					sentAt: O,
					title: T
				} = l, M = p && p.messageType, I = p && p.comment && p.comment.parent && p.comment.parent.id, _ = p && p.post && p.post.id, y = p && p.post, C = p && p.subreddit && p.subreddit.id, H = !h, S = `notif-${o?"tooltip":""}-menu-${w}`, A = S === a, j = M === x.a.CommentReply ? I : _, R = Object(r.a)(e.className, N.a.notificationItem, {
					[N.a.unread]: H
				}), k = {
					id: w,
					isClicked: !!h,
					isViewed: !0,
					type: M
				}, L = e => t(Object(ae.h)({
					...k,
					actionInfoType: e
				})), D = e => {
					t(Object(ae.p)({
						...k,
						actionInfoType: e
					}))
				}, P = () => {
					e.markNotificationAsRead(w, M)
				};
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("li", {
					className: R
				}, s.a.createElement(te.a, {
					className: N.a.link,
					onClick: () => t(Object(ae.f)(k)),
					onMouseDown: P,
					onKeyDown: P,
					to: u
				}, s.a.createElement(U, {
					avatar: d,
					iconType: v,
					messageType: M
				}), s.a.createElement("span", {
					className: N.a.contentContainer
				}, s.a.createElement(ee, {
					dropdownId: S,
					isHideNotifEligible: b,
					isInTooltip: o,
					isOverflowMenuOpen: A,
					isToggleMessageTypeEligible: E,
					isToggleNotificationUpdateEligible: g,
					isToggleUpdateFromSubredditEligible: f,
					sendInboxClickOverflow: () => t(Object(ae.g)(k)),
					sentAt: O,
					setActiveOverflowMenuId: c,
					title: T
				}), n && y ? s.a.createElement($, {
					post: y,
					isUnread: H
				}) : s.a.createElement("span", {
					className: N.a.body
				}, m)))), s.a.createElement(G, {
					disableMessageTypeNotifications: () => {
						const t = ae.b.DisableNotificationType;
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.disableMessageTypeNotifications(M, () => D(t)), L(t)
					},
					disableNotificationUpdates: () => {
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.disableNotificationUpdates(j), L(ae.b.HideSubreddit)
					},
					hideNotification: () => {
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.hideNotification(w), L(ae.b.HideUpdates)
					},
					hideSubredditNotifications: () => {
						const t = ae.b.HideSubreddit;
						e.isInTooltip && e.setActiveOverflowMenuId(""), e.hideSubredditNotifications(C, () => D(t)), L(t)
					},
					isInTooltip: o,
					isHideNotifEligible: b,
					isOpen: A,
					isToggleMessageTypeEligible: !(!E || !M),
					isToggleNotificationUpdateEligible: g,
					isToggleUpdateFromSubredditEligible: !(!f || !C),
					sendInboxViewOverflow: () => t(Object(ae.n)(k)),
					tooltipId: S
				}), s.a.createElement(i.a, {
					onChange: e => {
						e.isIntersecting && t(Object(ae.m)(k))
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, s.a.createElement("div", null)))
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
			var i = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/lessComponent.tsx"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				l = (a("./src/lib/timeAgo/index.ts"), a("./src/reddit/controls/MetaData/index.m.less")),
				c = a.n(l);
			const d = r.a.span("metaText", c.a),
				m = e => s.a.createElement(d, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: a,
					...n
				}) => {
					const r = Object(o.b)(t),
						l = i.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [i.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						c = e ? i.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? l : i.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [i.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return s.a.createElement(d, n, c)
				},
				u = e => s.a.createElement(d, null, i.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [i.fbt._plural(e, "number", Object(o.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, a) {
			"use strict";
			var i = a("./node_modules/react/index.js"),
				n = a.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Heart/index.tsx": function(e, t, a) {
			"use strict";
			var i = a("./node_modules/react/index.js"),
				n = a.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10.8276 3.19995C9.44201 3.19995 8.55081 4.10635 7.99961 5.03835C7.44841 4.10635 6.55721 3.19995 5.17161 3.19995C2.96841 3.19995 1.59961 4.60315 1.59961 6.86235C1.59961 11.444 7.41401 14.2096 7.66121 14.3248C7.76841 14.3752 7.88441 14.4 7.99961 14.4C8.11561 14.4 8.23081 14.3752 8.33801 14.3248C8.58601 14.2096 14.3996 11.444 14.3996 6.86235C14.3996 4.60315 13.0308 3.19995 10.8276 3.19995"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, a) {
			"use strict";
			var i = a("./node_modules/react/index.js"),
				n = a.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Notify/index.tsx": function(e, t, a) {
			"use strict";
			var i = a("./node_modules/react/index.js"),
				n = a.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16 12.988c0 .554.449 1.002 1 1.002a1 1 0 110 2H3a1 1 0 110-2c.551 0 1-.448 1-1l.01-5.002A5.996 5.996 0 0110 2a5.997 5.997 0 015.99 5.99l.01 4.998zM8 16.99h4c0 1.103-.897 2-2 2s-2-.897-2-2z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, a) {
			"use strict";
			var i = a("./node_modules/react/index.js"),
				n = a.n(i);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", s({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, a) {
			"use strict";
			var i, n;
			a.d(t, "a", (function() {
					return i
				})), a.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(i || (i = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return d
			})), a.d(t, "c", (function() {
				return p
			})), a.d(t, "b", (function() {
				return b
			})), a.d(t, "a", (function() {
				return g
			})), a.d(t, "e", (function() {
				return f
			}));
			var i = a("./node_modules/reselect/es/index.js"),
				n = a("./src/reddit/constants/experiments.ts"),
				s = a("./src/reddit/helpers/chooseVariant/index.ts"),
				r = a("./src/reddit/selectors/experiments/utils.ts"),
				o = a("./src/reddit/selectors/user.ts");
			const l = Object(i.a)(e => Object(s.c)(e, {
					experimentName: n.Yb,
					experimentEligibilitySelector: c
				}), r.a),
				c = e => Object(o.I)(e) || Object(o.J)(e),
				d = Object(i.a)(l, e => e === n.ec.Redesign),
				m = Object(i.a)(e => Object(s.c)(e, {
					experimentName: n.Xb,
					experimentEligibilitySelector: c
				}), r.a),
				p = Object(i.a)(m, e => e === n.dc.Enabled),
				u = Object(i.a)(e => Object(s.c)(e, {
					experimentName: n.Wb,
					experimentEligibilitySelector: c
				}), r.a),
				b = Object(i.a)(u, e => e === n.cc.Enabled),
				E = Object(i.a)(e => Object(s.c)(e, {
					experimentName: n.P,
					experimentEligibilitySelector: c
				}), r.a),
				g = Object(i.a)(E, e => e === n.Y.NoOverflow),
				f = Object(i.a)(E, e => e === n.Y.UndoBar)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.c5b3b472189a5d35902c.js.map
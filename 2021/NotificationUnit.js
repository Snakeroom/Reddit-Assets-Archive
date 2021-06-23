// https://www.redditstatic.com/desktop2x/NotificationUnit.63b01b4ee121ba6cc0dc.js
// Retrieved at 6/23/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var i = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/constants/icons.ts"),
				r = n("./src/reddit/models/NotificationInbox/index.ts");
			const l = {
				[r.b.Award]: s.a.award,
				[r.b.Chat]: s.a.chat,
				[r.b.Comment]: s.a.comment,
				[r.b.Heart]: s.a.heart,
				[r.b.Live]: s.a.video_live,
				[r.b.NotifyAll]: s.a.notification_frequent_fill,
				[r.b.Redditor]: s.a.user,
				[r.b.Reply]: s.a.comment,
				[r.b.SortRising]: s.a.rising,
				[r.b.SortTop]: s.a.top,
				[r.b.Trophy]: s.a.trophy,
				[r.b.Upvote]: s.a.upvote
			};
			var d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationUnit/index.m.less"),
				m = n.n(c);
			const u = `${i.a.assetPath}/img/cake_day.png`,
				p = e => {
					const {
						avatar: t,
						iconType: n,
						messageType: i
					} = e, a = l[n] || s.a.notification_fill, c = i === r.a.CakeDay, p = t && t.isNsfw, b = t && t.url;
					return o.a.createElement("span", {
						className: m.a.avatarContainer
					}, ((e, t, n) => t ? o.a.createElement("span", {
						className: m.a.nsfwAvatar
					}, "18+") : e ? o.a.createElement("img", {
						alt: "Slice of cake for cake day",
						className: m.a.avatar,
						src: u
					}) : o.a.createElement("img", {
						className: m.a.avatar,
						src: n || ""
					}))(c, p, b), o.a.createElement("span", {
						className: m.a.notificationIconContainer
					}, o.a.createElement(d.a, {
						name: a,
						isFilled: !0,
						className: m.a.NotifIcon
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/OverflowMenu.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var i, a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/components/NotificationUnit/index.m.less"),
				p = n.n(u);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder"
			}(i || (i = {}));
			const b = d.a.wrapped(m.a, "StyledDropdown", p.a),
				f = Object(l.a)(b),
				E = Object(c.a)(b, [r.a.Click]);
			f.displayName = "UnawareDropdown", E.displayName = "AwareDropdown";
			const v = d.a.button("HideNotif", p.a);
			v.displayName = "HideNotif";
			const N = d.a.button("HideNotifUpdate", p.a);
			N.displayName = "HideNotifUpdate";
			const x = d.a.button("HideSubUpdates", p.a);
			x.displayName = "HideSubUpdates";
			const h = d.a.button("HideAwarder", p.a);
			h.displayName = "HideAwarder";
			const O = e => {
				const {
					disableNotificationUpdates: t,
					hideNotification: n,
					blockAwarder: r,
					isInTooltip: l,
					isHideNotifEligible: d,
					isOpen: c,
					isToggleNotificationUpdateEligible: m,
					isToggleUpdateFromSubredditEligible: u,
					isBlockAwarderEligible: b,
					hideSubredditNotifications: O,
					sendInboxViewOverflow: g,
					tooltipId: T
				} = e;
				Object(o.useEffect)(() => {
					c && g()
				}, [c]);
				const w = e => {
						let o;
						switch (e) {
							case i.HideNotif:
								o = {
									text: a.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: n,
									Component: v
								};
								break;
							case i.HideSubUpdates:
								o = {
									text: a.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: O,
									Component: x
								};
								break;
							case i.HideNotifUpdate:
								o = {
									text: a.fbt._("Don't get updates on this", null, {
										hk: "L7aUS"
									}),
									handler: t,
									Component: N
								};
								break;
							case i.HideAwarder:
								o = {
									text: a.fbt._("Block awards from this user", null, {
										hk: "47U4V4"
									}),
									handler: r,
									Component: h
								};
								break;
							default:
								o = null
						}
						if (!o) return;
						const {
							handler: l,
							text: d,
							Component: c
						} = o;
						return s.a.createElement(c, {
							className: p.a.overflowMenuOption,
							onClick: l
						}, d)
					},
					I = l ? E : f;
				return s.a.createElement(I, {
					id: T,
					isOverlayOff: !0,
					isOpen: c,
					tooltipId: T,
					tooltipPosition: ["right", "top"]
				}, s.a.createElement("div", {
					className: p.a.overflowMenuContainer
				}, d && w(i.HideNotif), u && w(i.HideSubUpdates), m && w(i.HideNotifUpdate), b && w(i.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/MetaData/index.tsx");
			var d = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM1.625,10A8.327,8.327,0,0,1,3.66,4.544l11.8,11.8A8.363,8.363,0,0,1,1.625,10ZM16.34,15.456,4.544,3.66a8.363,8.363,0,0,1,11.8,11.8Z"
			}));
			var c = e => o.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("path", {
				d: "M9.432 7.368a.856.856 0 00.472.128.912.912 0 00.496-.12.8.8 0 00.32-.304.8.8 0 000-.856.8.8 0 00-.32-.304.904.904 0 00-.464-.112.936.936 0 00-.44.104.8.8 0 00-.328.296.744.744 0 00-.128.432.8.8 0 00.112.424.8.8 0 00.28.312zM10.448 8.8a1.208 1.208 0 00-.544-.12 1.176 1.176 0 00-.536.12.904.904 0 00-.376.336.8.8 0 000 .92.913.913 0 00.376.312c.167.081.35.122.536.12.188.002.374-.039.544-.12a.945.945 0 00.384-.32.8.8 0 00.136-.448.848.848 0 00-.136-.464.976.976 0 00-.384-.336z"
			}), o.a.createElement("path", {
				d: "M14.672 5.384l-4.056-4.056a3.688 3.688 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.69 3.69 0 000-5.232zM6.512 11.6H4.984V6.624L3.672 7.2V5.776l2.4-1.088h.448L6.512 11.6zm5.6-.904c-.234.32-.552.57-.92.72a3.264 3.264 0 01-2.552 0 2.185 2.185 0 01-.912-.72 1.736 1.736 0 01-.336-1.04c-.005-.335.09-.663.272-.944.184-.293.437-.538.736-.712a1.864 1.864 0 01-.688-1.472A1.736 1.736 0 018 5.536a1.88 1.88 0 01.8-.68 2.712 2.712 0 012.248 0c.325.148.602.383.8.68.192.29.292.63.288.976a1.903 1.903 0 01-.696 1.456c.3.172.556.413.744.704.186.283.283.614.28.952a1.68 1.68 0 01-.368 1.072h.016z"
			}));
			var m = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, o.a.createElement("path", {
					d: "M14.672 5.384l-4.056-4.056a3.689 3.689 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.689 3.689 0 000-5.232zM8.928 3.952L8.704 9.36H7.296l-.24-5.408h1.872zm-.04 7.648a.96.96 0 01-.368.368 1.05 1.05 0 01-.52.136A1.033 1.033 0 017.48 12a1 1 0 01-.376-.376 1.072 1.072 0 010-1.04.944.944 0 01.376-.376.96.96 0 01.52-.144.975.975 0 01.52.144.928.928 0 01.368.376 1.024 1.024 0 010 1.048V11.6z"
				})),
				u = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				p = n("./src/reddit/models/NotificationInbox/index.ts"),
				b = n("./src/reddit/components/NotificationUnit/index.m.less"),
				f = n.n(b);
			const E = r.a.wrapped(u.b, "StateIcon", f.a);
			E.displayName = "Trash";
			const v = r.a.wrapped(d, "StateIcon", f.a);
			v.displayName = "Remove";
			const N = r.a.span("Text", f.a);
			N.displayName = "PostUnavailableText";
			const x = r.a.div("PostUnavailableInfo", f.a),
				h = r.a.wrapped(c, "WarningIcon", f.a),
				O = r.a.wrapped(m, "WarningIcon", f.a),
				g = e => {
					const {
						isNsfw: t,
						isSpoiler: n,
						obfuscatedThumbnailUrl: a,
						thumbnailUrl: s
					} = e;
					return !s || t && !a || n && !a ? null : t ? o.a.createElement("span", {
						className: f.a.postEmbedBlurredThumbnailContainer
					}, o.a.createElement("span", {
						className: f.a.postEmbedNSFWThumbnailIndicator
					}, "18+"), o.a.createElement("img", {
						alt: i.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: f.a.postEmbedBlurredThumbnail,
						src: a
					})) : n ? o.a.createElement("img", {
						alt: i.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: f.a.postEmbedBlurredThumbnail,
						src: a
					}) : o.a.createElement("img", {
						className: f.a.postEmbedThumbnail,
						src: s
					})
				},
				T = ({
					post: {
						commentCount: e = 0,
						isNsfw: t,
						isSpoiler: n,
						media: a,
						removedByCategory: r,
						score: d = 0,
						thumbnail: c,
						title: m
					},
					isUnread: u
				}) => {
					var b, T;
					const w = r === p.c.Deleted,
						I = r && r !== p.c.Deleted,
						A = Object(s.a)(f.a.postEmbedContainer, {
							[f.a.unread]: u
						}),
						C = Object(s.a)(f.a.postEmbedContent, {
							[f.a.deleted]: w || I
						}),
						_ = (null === (T = null === (b = null == a ? void 0 : a.obfuscated) || void 0 === b ? void 0 : b.content) || void 0 === T ? void 0 : T.url) && c.url,
						U = null == c ? void 0 : c.url;
					return o.a.createElement("span", {
						className: A
					}, o.a.createElement("span", {
						className: C
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: f.a.postEmbedTitleContainer
					}, t && o.a.createElement(h, null), n && o.a.createElement(O, null), o.a.createElement("p", {
						className: f.a.postEmbedTitle
					}, m)), o.a.createElement("span", {
						className: f.a.postEmbedMeta
					}, !w && !I && o.a.createElement(o.a.Fragment, null, o.a.createElement(l.b, {
						isScoreHidden: !1,
						score: d,
						useUpvotes: !0
					}), o.a.createElement(l.c, null), Object(l.d)(e)), w && o.a.createElement(x, null, o.a.createElement(E, null), o.a.createElement(N, null, i.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), I && o.a.createElement(x, null, o.a.createElement(v, null), o.a.createElement(N, null, i.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), o.a.createElement(g, {
						isNsfw: t,
						isSpoiler: n,
						obfuscatedThumbnailUrl: _,
						thumbnailUrl: U
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/TopBar.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/timeAgo/index.ts"),
				l = n("./src/reddit/controls/MetaData/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationUnit/index.m.less"),
				m = n.n(c);
			const u = e => {
				const {
					dropdownId: t,
					isHideNotifEligible: n,
					isInTooltip: i,
					isOverflowMenuOpen: c,
					isToggleNotificationUpdateEligible: u,
					isToggleUpdateFromSubredditEligible: p,
					sendInboxClickOverflow: b,
					sentAt: f,
					setActiveOverflowMenuId: E,
					title: v
				} = e, N = n || u || p, x = Object(o.a)(m.a.menuButton, {
					[m.a.isOpen]: c
				}), h = Date.parse(f) / s.Nb;
				return a.a.createElement("span", {
					className: m.a.topBar
				}, a.a.createElement("span", null, a.a.createElement("span", {
					className: Object(o.a)(m.a.title, {
						[m.a["m-tooltip"]]: i
					})
				}, v), a.a.createElement(l.c, null), a.a.createElement("span", {
					className: m.a.timeAgo
				}, Object(r.a)(h, !0))), N && a.a.createElement("button", {
					"aria-expanded": c,
					"aria-haspopup": !0,
					className: x,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), c ? E("") : (b(), E(t))
					}
				}, a.a.createElement(d.a, {
					name: "overflow_horizontal",
					className: m.a.MenuIcon
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/helpers/parseUrl.ts"),
				d = n("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				c = n("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				m = n("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				u = n("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inbox.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/models/NotificationInbox/index.ts"),
				v = n("./node_modules/react-redux/es/index.js"),
				N = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/NotificationUnit/index.m.less"),
				g = n.n(O);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-Button",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-NotificationUnit-Button").then(n.bind(null, "./src/reddit/components/NotificationUnit/Button.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/NotificationUnit/Button.tsx"
					}
				}),
				I = "",
				A = .5,
				C = e => {
					var t, n, i, O, C, _, U;
					const S = Object(f.a)(),
						y = Object(v.d)(),
						M = Object(v.e)(h.W),
						[H, k] = Object(o.useState)(!1),
						{
							activeOverflowMenuId: D,
							isInboxPostEmbedEnabled: R,
							isInTooltip: P,
							notification: j,
							setActiveOverflowMenuId: L,
							onItemClick: B
						} = e;
					if (!j) return null;
					const {
						avatar: F,
						body: V,
						context: W,
						deeplinkUrl: z,
						isHideNotifEligible: Y,
						isToggleNotificationUpdateEligible: Z,
						isToggleUpdateFromSubredditEligible: G,
						icon: K,
						id: q,
						readAt: $,
						sentAt: J,
						title: Q
					} = j, X = W && W.messageType, ee = W && W.comment && W.comment.parent && W.comment.parent.id, te = W && W.post && W.post.id, ne = W && W.post, ie = W && W.subreddit && W.subreddit.id, ae = null == W ? void 0 : W.isBodyHidden, oe = null == W ? void 0 : W.isPostHidden, se = !$, re = `notif-${P?"tooltip":""}-menu-${q}`, le = re === D, de = X === E.a.CommentReply ? ee : te, ce = Object(r.a)(e.className, g.a.notificationItem, {
						[g.a.unread]: se,
						[g.a.isNightMode]: M
					}), me = {
						id: q,
						isClicked: !!$,
						isViewed: !0,
						type: X
					}, ue = W.messageType === E.a.AwardReceived, pe = ue ? null === (t = null == W ? void 0 : W.awarding) || void 0 === t ? void 0 : t.id : "", be = null === (i = null === (n = null == W ? void 0 : W.awarding) || void 0 === n ? void 0 : n.target) || void 0 === i ? void 0 : i.permalink, fe = null === (O = null == W ? void 0 : W.awarding) || void 0 === O ? void 0 : O.award.id;
					let Ee;
					switch (W.messageType) {
						case E.a.AwardReceived:
							Ee = null === (_ = null === (C = null == W ? void 0 : W.awarding) || void 0 === C ? void 0 : C.awarder) || void 0 === _ ? void 0 : _.id
					}
					const ve = e => {
							S(Object(b.i)({
								...me,
								actionInfoType: e
							}))
						},
						Ne = () => {
							e.markNotificationAsRead(q, X)
						},
						xe = s.a.createElement(s.a.Fragment, null, s.a.createElement(d.a, {
							avatar: F,
							iconType: K,
							messageType: X
						}), s.a.createElement("span", {
							className: g.a.contentContainer
						}, s.a.createElement(u.a, {
							dropdownId: re,
							isHideNotifEligible: Y,
							isInTooltip: P,
							isOverflowMenuOpen: le,
							isToggleNotificationUpdateEligible: Z,
							isToggleUpdateFromSubredditEligible: G,
							sendInboxClickOverflow: () => S(Object(b.h)({
								...me,
								awardId: fe
							})),
							sentAt: J,
							setActiveOverflowMenuId: L,
							title: Q
						}), R && ne && !oe && s.a.createElement(m.a, {
							isUnread: se,
							post: ne
						}), R && !ae && s.a.createElement("span", {
							className: g.a.body
						}, V), !R && s.a.createElement("span", {
							className: g.a.body
						}, V), (() => {
							var e, t;
							return null === (t = null === (e = null == W ? void 0 : W.awarding) || void 0 === e ? void 0 : e.awarder) || void 0 === t ? void 0 : t.isAcceptingChats
						})() ? s.a.createElement(w, {
							isUnread: se,
							messageType: X,
							notificationUserId: Ee,
							isFullWidth: P,
							onClick: e => {
								e.preventDefault(), (e => S(Object(b.g)({
									...me,
									awardId: fe,
									position: e
								})))(b.b.SECOND), P && B && B()
							}
						}) : null)),
						he = {
							className: g.a.link,
							onClick: e => {
								(null == ne ? void 0 : ne.removedByCategory) ? (e.preventDefault(), y(Object(N.f)({
									kind: x.b.Error,
									text: "Sorry, this content is no longer available.",
									duration: N.a
								}))) : P && B && B(), S(Object(b.g)({
									...me,
									awardId: fe,
									position: b.b.FIRST
								}))
							},
							onMouseDown: Ne,
							onKeyDown: Ne
						},
						Oe = ue && be ? be : z,
						ge = null === (U = Object(l.a)(Oe)) || void 0 === U ? void 0 : U.host,
						Te = "reddit.com" === ge || "www.reddit.com" === ge;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("li", {
						className: ce
					}, Te ? s.a.createElement(p.a, T({}, he, {
						to: Oe
					}), xe) : s.a.createElement("a", T({}, he, {
						href: Oe,
						target: "_blank",
						rel: "noopener noreferrer"
					}), xe)), s.a.createElement(c.a, {
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(I), e.disableNotificationUpdates(de), ve(b.c.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(I), e.hideNotification(q), ve(b.c.HideUpdates)
						},
						hideSubredditNotifications: () => {
							const t = b.c.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId(I), e.hideSubredditNotifications(ie, () => (e => {
								S(Object(b.r)({
									...me,
									actionInfoType: e
								}))
							})(t)), ve(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(I), e.blockAwarder(pe), ve(b.c.BlockAwarder)
						},
						isInTooltip: P,
						isHideNotifEligible: Y,
						isOpen: le,
						isToggleNotificationUpdateEligible: Z,
						isToggleUpdateFromSubredditEligible: !(!G || !ie),
						isBlockAwarderEligible: ue,
						sendInboxViewOverflow: () => S(Object(b.p)(me)),
						tooltipId: re
					}), s.a.createElement(a.a, {
						onChange: e => {
							e.isIntersecting && !H && (S(Object(b.o)(me)), k(!0))
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: A
					}, s.a.createElement("div", null)))
				};
			t.default = C
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				s = n("./src/reddit/constants/elementIds.ts"),
				r = n("./src/reddit/contexts/InsideOverlay.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(o.a)(e, t);
				class i extends a.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(s.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return a.a.createElement(n, l({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(r.b)(i)
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				l = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(l);
			const c = s.a.span("metaText", d.a),
				m = e => o.a.createElement(c, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...a
				}) => {
					const s = Object(r.b)(t),
						l = i.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [i.fbt._plural(t, "number", s)], {
							hk: "2L3T21"
						}),
						d = e ? i.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? l : i.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [i.fbt._plural(t, "number", s)], {
							hk: "gf67v"
						});
					return o.a.createElement(c, a, d)
				},
				p = e => o.a.createElement(c, null, i.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [i.fbt._plural(e, "number", Object(r.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = n.n(s);
			const l = e => a.a.createElement("svg", {
				className: Object(o.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var i, a, o, s;
			n.d(t, "a", (function() {
					return i
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(i || (i = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(a || (a = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(o || (o = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(s || (s = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.63b01b4ee121ba6cc0dc.js.map
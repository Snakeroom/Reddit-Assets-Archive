// https://www.redditstatic.com/desktop2x/NotificationUnit.ba2db3972de54670451f.js
// Retrieved at 6/9/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
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
			const d = {
				[r.b.Award]: s.a.award,
				[r.b.Chat]: s.a.chat,
				[r.b.Comment]: s.a.comment,
				[r.b.Reply]: s.a.comment,
				[r.b.Heart]: s.a.heart,
				[r.b.Live]: s.a.video_live,
				[r.b.Redditor]: s.a.user,
				[r.b.SortRising]: s.a.rising,
				[r.b.SortTop]: s.a.top,
				[r.b.Trophy]: s.a.trophy,
				[r.b.Upvote]: s.a.upvote
			};
			var l = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationUnit/index.m.less"),
				m = n.n(c);
			const u = `${i.a.assetPath}/img/cake_day.png`,
				p = e => {
					const {
						avatar: t,
						iconType: n,
						messageType: i
					} = e, a = d[n] || s.a.notification_fill, c = i === r.a.CakeDay, p = t && t.isNsfw, b = t && t.url;
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
					}, o.a.createElement(l.a, {
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
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/components/NotificationUnit/index.m.less"),
				p = n.n(u);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder"
			}(i || (i = {}));
			const b = l.a.wrapped(m.a, "StyledDropdown", p.a),
				f = Object(d.a)(b),
				v = Object(c.a)(b, [r.a.Click]);
			f.displayName = "UnawareDropdown", v.displayName = "AwareDropdown";
			const E = l.a.button("HideNotif", p.a);
			E.displayName = "HideNotif";
			const N = l.a.button("HideNotifUpdate", p.a);
			N.displayName = "HideNotifUpdate";
			const x = l.a.button("HideSubUpdates", p.a);
			x.displayName = "HideSubUpdates";
			const h = l.a.button("HideAwarder", p.a);
			h.displayName = "HideAwarder";
			const O = e => {
				const {
					disableNotificationUpdates: t,
					hideNotification: n,
					blockAwarder: r,
					isInTooltip: d,
					isHideNotifEligible: l,
					isOpen: c,
					isToggleNotificationUpdateEligible: m,
					isToggleUpdateFromSubredditEligible: u,
					isBlockAwarderEligible: b,
					hideSubredditNotifications: O,
					sendInboxViewOverflow: g,
					tooltipId: w
				} = e;
				Object(o.useEffect)(() => {
					c && g()
				}, [c]);
				const T = e => {
						let o;
						switch (e) {
							case i.HideNotif:
								o = {
									text: a.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: n,
									Component: E
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
							handler: d,
							text: l,
							Component: c
						} = o;
						return s.a.createElement(c, {
							className: p.a.overflowMenuOption,
							onClick: d
						}, l)
					},
					I = d ? v : f;
				return s.a.createElement(I, {
					id: w,
					isOverlayOff: !0,
					isOpen: c,
					tooltipId: w,
					tooltipPosition: ["right", "top"]
				}, s.a.createElement("div", {
					className: p.a.overflowMenuContainer
				}, l && T(i.HideNotif), u && T(i.HideSubUpdates), m && T(i.HideNotifUpdate), b && T(i.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/MetaData/index.tsx");
			var l = e => o.a.createElement("svg", {
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
			const v = r.a.wrapped(u.b, "StateIcon", f.a);
			v.displayName = "Trash";
			const E = r.a.wrapped(l, "StateIcon", f.a);
			E.displayName = "Remove";
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
				w = ({
					post: {
						commentCount: e = 0,
						isNsfw: t,
						isSpoiler: n,
						media: a,
						removedByCategory: r,
						score: l = 0,
						thumbnail: c,
						title: m
					},
					isUnread: u
				}) => {
					var b, w;
					const T = r === p.c.Deleted,
						I = r && r !== p.c.Deleted,
						C = Object(s.a)(f.a.postEmbedContainer, {
							[f.a.unread]: u
						}),
						A = Object(s.a)(f.a.postEmbedContent, {
							[f.a.deleted]: T || I
						}),
						U = (null === (w = null === (b = null == a ? void 0 : a.obfuscated) || void 0 === b ? void 0 : b.content) || void 0 === w ? void 0 : w.url) && c.url,
						_ = null == c ? void 0 : c.url;
					return o.a.createElement("span", {
						className: C
					}, o.a.createElement("span", {
						className: A
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: f.a.postEmbedTitleContainer
					}, t && o.a.createElement(h, null), n && o.a.createElement(O, null), o.a.createElement("p", {
						className: f.a.postEmbedTitle
					}, m)), o.a.createElement("span", {
						className: f.a.postEmbedMeta
					}, !T && !I && o.a.createElement(o.a.Fragment, null, o.a.createElement(d.b, {
						isScoreHidden: !1,
						score: l,
						useUpvotes: !0
					}), o.a.createElement(d.c, null), Object(d.d)(e)), T && o.a.createElement(x, null, o.a.createElement(v, null), o.a.createElement(N, null, i.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), I && o.a.createElement(x, null, o.a.createElement(E, null), o.a.createElement(N, null, i.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), o.a.createElement(g, {
						isNsfw: t,
						isSpoiler: n,
						obfuscatedThumbnailUrl: U,
						thumbnailUrl: _
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
				d = n("./src/reddit/controls/MetaData/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
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
					setActiveOverflowMenuId: v,
					title: E
				} = e, N = n || u || p, x = Object(o.a)(m.a.menuButton, {
					[m.a.isOpen]: c
				}), h = Date.parse(f) / s.Nb;
				return a.a.createElement("span", {
					className: m.a.topBar
				}, a.a.createElement("span", null, a.a.createElement("span", {
					className: Object(o.a)(m.a.title, {
						[m.a["m-tooltip"]]: i
					})
				}, E), a.a.createElement(d.c, null), a.a.createElement("span", {
					className: m.a.timeAgo
				}, Object(r.a)(h, !0))), N && a.a.createElement("button", {
					"aria-expanded": c,
					"aria-haspopup": !0,
					className: x,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), c ? v("") : (b(), v(t))
					}
				}, a.a.createElement(l.a, {
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
				d = n("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				l = n("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				c = n("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				m = n("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/helpers/trackers/inbox.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/models/NotificationInbox/index.ts"),
				v = n("./node_modules/react-redux/es/index.js"),
				E = n("./src/reddit/actions/toaster.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/NotificationUnit/index.m.less"),
				O = n.n(h);
			const g = Object(i.a)({
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
				w = "",
				T = .5,
				I = e => {
					var t, n, i, h, I, C;
					const A = Object(b.a)(),
						U = Object(v.d)(),
						_ = Object(v.e)(x.W),
						[S, M] = Object(o.useState)(!1),
						{
							activeOverflowMenuId: y,
							isInboxPostEmbedEnabled: H,
							isInTooltip: k,
							notification: D,
							setActiveOverflowMenuId: R,
							onItemClick: P
						} = e;
					if (!D) return null;
					const {
						avatar: j,
						body: L,
						context: B,
						deeplinkUrl: F,
						isHideNotifEligible: V,
						isToggleNotificationUpdateEligible: W,
						isToggleUpdateFromSubredditEligible: z,
						icon: Z,
						id: Y,
						readAt: K,
						sentAt: G,
						title: q
					} = D, $ = B && B.messageType, J = B && B.comment && B.comment.parent && B.comment.parent.id, Q = B && B.post && B.post.id, X = B && B.post, ee = B && B.subreddit && B.subreddit.id, te = null == B ? void 0 : B.isBodyHidden, ne = null == B ? void 0 : B.isPostHidden, ie = !K, ae = `notif-${k?"tooltip":""}-menu-${Y}`, oe = ae === y, se = $ === f.a.CommentReply ? J : Q, re = Object(r.a)(e.className, O.a.notificationItem, {
						[O.a.unread]: ie,
						[O.a.isNightMode]: _
					}), de = {
						id: Y,
						isClicked: !!K,
						isViewed: !0,
						type: $
					}, le = B.messageType === f.a.AwardReceived, ce = le ? null === (t = null == B ? void 0 : B.awarding) || void 0 === t ? void 0 : t.id : "", me = null === (i = null === (n = null == B ? void 0 : B.awarding) || void 0 === n ? void 0 : n.target) || void 0 === i ? void 0 : i.permalink, ue = null === (h = null == B ? void 0 : B.awarding) || void 0 === h ? void 0 : h.award.id;
					let pe;
					switch (B.messageType) {
						case f.a.AwardReceived:
							pe = null === (C = null === (I = null == B ? void 0 : B.awarding) || void 0 === I ? void 0 : I.awarder) || void 0 === C ? void 0 : C.id
					}
					const be = e => {
							A(Object(p.i)({
								...de,
								actionInfoType: e
							}))
						},
						fe = () => {
							e.markNotificationAsRead(Y, $)
						};
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("li", {
						className: re
					}, s.a.createElement(u.a, {
						className: O.a.link,
						onClick: e => {
							(null == X ? void 0 : X.removedByCategory) ? (e.preventDefault(), U(Object(E.f)({
								kind: N.b.Error,
								text: "Sorry, this content is no longer available.",
								duration: E.a
							}))) : k && P && P(), A(Object(p.g)({
								...de,
								awardId: ue,
								position: p.b.FIRST
							}))
						},
						onMouseDown: fe,
						onKeyDown: fe,
						to: le && me ? me : F
					}, s.a.createElement(d.a, {
						avatar: j,
						iconType: Z,
						messageType: $
					}), s.a.createElement("span", {
						className: O.a.contentContainer
					}, s.a.createElement(m.a, {
						dropdownId: ae,
						isHideNotifEligible: V,
						isInTooltip: k,
						isOverflowMenuOpen: oe,
						isToggleNotificationUpdateEligible: W,
						isToggleUpdateFromSubredditEligible: z,
						sendInboxClickOverflow: () => A(Object(p.h)({
							...de,
							awardId: ue
						})),
						sentAt: G,
						setActiveOverflowMenuId: R,
						title: q
					}), H && X && !ne && s.a.createElement(c.a, {
						isUnread: ie,
						post: X
					}), H && !te && s.a.createElement("span", {
						className: O.a.body
					}, L), !H && s.a.createElement("span", {
						className: O.a.body
					}, L), (() => {
						var e, t;
						return null === (t = null === (e = null == B ? void 0 : B.awarding) || void 0 === e ? void 0 : e.awarder) || void 0 === t ? void 0 : t.isAcceptingChats
					})() ? s.a.createElement(g, {
						isUnread: ie,
						messageType: $,
						notificationUserId: pe,
						isFullWidth: k,
						onClick: e => {
							e.preventDefault(), (e => A(Object(p.g)({
								...de,
								awardId: ue,
								position: e
							})))(p.b.SECOND), k && P && P()
						}
					}) : null))), s.a.createElement(l.a, {
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(w), e.disableNotificationUpdates(se), be(p.c.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(w), e.hideNotification(Y), be(p.c.HideUpdates)
						},
						hideSubredditNotifications: () => {
							const t = p.c.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId(w), e.hideSubredditNotifications(ee, () => (e => {
								A(Object(p.r)({
									...de,
									actionInfoType: e
								}))
							})(t)), be(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(w), e.blockAwarder(ce), be(p.c.BlockAwarder)
						},
						isInTooltip: k,
						isHideNotifEligible: V,
						isOpen: oe,
						isToggleNotificationUpdateEligible: W,
						isToggleUpdateFromSubredditEligible: !(!z || !ee),
						isBlockAwarderEligible: le,
						sendInboxViewOverflow: () => A(Object(p.p)(de)),
						tooltipId: ae
					}), s.a.createElement(a.a, {
						onChange: e => {
							e.isIntersecting && !S && (A(Object(p.o)(de)), M(!0))
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: T
					}, s.a.createElement("div", null)))
				};
			t.default = I
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				s = n("./src/reddit/constants/elementIds.ts"),
				r = n("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
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
						return a.a.createElement(n, d({}, this.props, {
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
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				l = n.n(d);
			const c = s.a.span("metaText", l.a),
				m = e => o.a.createElement(c, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...a
				}) => {
					const s = Object(r.b)(t),
						d = i.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [i.fbt._plural(t, "number", s)], {
							hk: "2L3T21"
						}),
						l = e ? i.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : i.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [i.fbt._plural(t, "number", s)], {
							hk: "gf67v"
						});
					return o.a.createElement(c, a, l)
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
				return d
			}));
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = n.n(s);
			const d = e => a.a.createElement("svg", {
				className: Object(o.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
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
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER", e.AwardReceived = "AWARD_RECEIVED", e.PostFollow = "POST_FOLLOW", e.CommentFollow = "COMMENT_FOLLOW"
				}(i || (i = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE", e.Award = "AWARD"
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.ba2db3972de54670451f.js.map
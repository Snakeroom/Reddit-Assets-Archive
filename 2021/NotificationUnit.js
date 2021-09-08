// https://www.redditstatic.com/desktop2x/NotificationUnit.bec0dfdb77eba67f28fd.js
// Retrieved at 9/8/2021, 10:40:10 AM by Reddit Dataminer v1.0.0
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
				return h
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
				v = Object(c.a)(b, [r.a.Click]);
			f.displayName = "UnawareDropdown", v.displayName = "AwareDropdown";
			const E = d.a.button("HideNotif", p.a);
			E.displayName = "HideNotif";
			const N = d.a.button("HideNotifUpdate", p.a);
			N.displayName = "HideNotifUpdate";
			const x = d.a.button("HideSubUpdates", p.a);
			x.displayName = "HideSubUpdates";
			const O = d.a.button("HideAwarder", p.a);
			O.displayName = "HideAwarder";
			const h = e => {
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
					hideSubredditNotifications: h,
					sendInboxViewOverflow: T,
					tooltipId: g
				} = e;
				Object(o.useEffect)(() => {
					c && T()
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
									Component: E
								};
								break;
							case i.HideSubUpdates:
								o = {
									text: a.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: h,
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
									Component: O
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
					I = l ? v : f;
				return s.a.createElement(I, {
					id: g,
					isOverlayOff: !0,
					isOpen: c,
					tooltipId: g,
					tooltipPosition: ["right", "top"]
				}, s.a.createElement("div", {
					className: p.a.overflowMenuContainer
				}, d && w(i.HideNotif), u && w(i.HideSubUpdates), m && w(i.HideNotifUpdate), b && w(i.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
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
			const v = r.a.wrapped(u.b, "StateIcon", f.a);
			v.displayName = "Trash";
			const E = r.a.wrapped(d, "StateIcon", f.a);
			E.displayName = "Remove";
			const N = r.a.span("Text", f.a);
			N.displayName = "PostUnavailableText";
			const x = r.a.div("PostUnavailableInfo", f.a),
				O = r.a.wrapped(c, "WarningIcon", f.a),
				h = r.a.wrapped(m, "WarningIcon", f.a),
				T = e => {
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
				g = ({
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
					var b, g;
					const w = r === p.c.Deleted,
						I = r && r !== p.c.Deleted,
						A = Object(s.a)(f.a.postEmbedContainer, {
							[f.a.unread]: u
						}),
						C = Object(s.a)(f.a.postEmbedContent, {
							[f.a.deleted]: w || I
						}),
						_ = (null === (g = null === (b = null == a ? void 0 : a.obfuscated) || void 0 === b ? void 0 : b.content) || void 0 === g ? void 0 : g.url) && c.url,
						U = null == c ? void 0 : c.url;
					return o.a.createElement("span", {
						className: A
					}, o.a.createElement("span", {
						className: C
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: f.a.postEmbedTitleContainer
					}, t && o.a.createElement(O, null), n && o.a.createElement(h, null), o.a.createElement("p", {
						className: f.a.postEmbedTitle
					}, m)), o.a.createElement("span", {
						className: f.a.postEmbedMeta
					}, !w && !I && o.a.createElement(o.a.Fragment, null, o.a.createElement(l.b, {
						isScoreHidden: !1,
						score: d,
						useUpvotes: !0
					}), o.a.createElement(l.c, null), Object(l.d)(e)), w && o.a.createElement(x, null, o.a.createElement(v, null), o.a.createElement(N, null, i.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), I && o.a.createElement(x, null, o.a.createElement(E, null), o.a.createElement(N, null, i.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), o.a.createElement(T, {
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
					setActiveOverflowMenuId: v,
					title: E
				} = e, N = n || u || p, x = Object(o.a)(m.a.menuButton, {
					[m.a.isOpen]: c
				}), O = Date.parse(f) / s.Pb;
				return a.a.createElement("span", {
					className: m.a.topBar
				}, a.a.createElement("span", null, a.a.createElement("span", {
					className: Object(o.a)(m.a.title, {
						[m.a["m-tooltip"]]: i
					})
				}, E), a.a.createElement(l.c, null), a.a.createElement("span", {
					className: m.a.timeAgo
				}, Object(r.a)(O, !0))), N && a.a.createElement("button", {
					"aria-expanded": c,
					"aria-haspopup": !0,
					className: x,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), c ? v("") : (b(), v(t))
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
				v = n("./src/reddit/models/NotificationInbox/index.ts"),
				E = n("./node_modules/react-redux/es/index.js"),
				N = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/experiments/inboxCTAs.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/NotificationUnit/index.m.less"),
				g = n.n(T);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(i.a)({
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
				A = "",
				C = .5,
				_ = e => {
					var t, n, i, T, _, U, S, y, M, j, H, k;
					const P = Object(f.a)(),
						R = Object(E.d)(),
						D = Object(E.e)(h.X),
						L = Object(E.e)(O.b),
						B = Object(E.e)(O.c),
						F = Object(E.e)(O.a),
						[V, W] = Object(o.useState)(!1),
						{
							activeOverflowMenuId: z,
							isInboxPostEmbedEnabled: Y,
							isInTooltip: Z,
							notification: G,
							setActiveOverflowMenuId: K,
							onItemClick: q
						} = e;
					if (!G) return null;
					const {
						avatar: J,
						body: $,
						context: X,
						deeplinkUrl: Q,
						isHideNotifEligible: ee,
						isToggleNotificationUpdateEligible: te,
						isToggleUpdateFromSubredditEligible: ne,
						icon: ie,
						id: ae,
						readAt: oe,
						sentAt: se,
						title: re
					} = G, le = null == X ? void 0 : X.messageType, de = null === (n = null === (t = null == X ? void 0 : X.comment) || void 0 === t ? void 0 : t.parent) || void 0 === n ? void 0 : n.id, ce = null === (i = null == X ? void 0 : X.post) || void 0 === i ? void 0 : i.id, me = null == X ? void 0 : X.post, ue = null === (T = null == X ? void 0 : X.subreddit) || void 0 === T ? void 0 : T.id, pe = null == X ? void 0 : X.isBodyHidden, be = null == X ? void 0 : X.isPostHidden, fe = !oe, ve = `notif-${Z?"tooltip":""}-menu-${ae}`, Ee = ve === z, Ne = le === v.a.CommentReply ? de : ce, xe = Object(r.a)(e.className, g.a.notificationItem, {
						[g.a.unread]: fe,
						[g.a.isNightMode]: D
					}), Oe = L || F || B, he = {
						id: ae,
						isClicked: !!oe,
						isViewed: !0,
						type: le
					}, Te = X.messageType === v.a.AwardReceived, ge = Te ? null === (_ = null == X ? void 0 : X.awarding) || void 0 === _ ? void 0 : _.id : "", we = null === (S = null === (U = null == X ? void 0 : X.awarding) || void 0 === U ? void 0 : U.target) || void 0 === S ? void 0 : S.permalink, Ie = null === (y = null == X ? void 0 : X.awarding) || void 0 === y ? void 0 : y.award.id, Ae = null === (M = null == X ? void 0 : X.post) || void 0 === M ? void 0 : M.permalink, Ce = Te && we ? we : Ae || Q, _e = null === (H = null === (j = null == X ? void 0 : X.awarding) || void 0 === j ? void 0 : j.awarder) || void 0 === H ? void 0 : H.isAcceptingChats, Ue = e => {
						P(Object(b.k)({
							...he,
							actionInfoType: e
						}))
					}, Se = () => {
						e.markNotificationAsRead(ae, le)
					}, ye = e => P(Object(b.i)({
						...he,
						...e
					})), Me = s.a.createElement(s.a.Fragment, null, s.a.createElement(d.a, {
						avatar: J,
						iconType: ie,
						messageType: le
					}), s.a.createElement("span", {
						className: g.a.contentContainer
					}, s.a.createElement(u.a, {
						dropdownId: ve,
						isHideNotifEligible: ee,
						isInTooltip: Z,
						isOverflowMenuOpen: Ee,
						isToggleNotificationUpdateEligible: te,
						isToggleUpdateFromSubredditEligible: ne,
						sendInboxClickOverflow: () => P(Object(b.j)({
							...he,
							awardId: Ie
						})),
						sentAt: se,
						setActiveOverflowMenuId: K,
						title: re
					}), Y && me && !be && s.a.createElement(m.a, {
						isUnread: fe,
						post: me
					}), Y && !pe && s.a.createElement("span", {
						className: g.a.body
					}, $), !Y && s.a.createElement("span", {
						className: g.a.body
					}, $), (_e || Oe) && s.a.createElement(I, {
						context: X,
						notificationId: ae,
						isUnread: fe,
						isFullWidth: Z,
						onEvent: ye,
						isInboxCTAsReplyEnabled: L,
						isInboxCTAsAllEnabled: F,
						isInboxCTAsSeePostEnabled: B,
						deeplinkUrl: Q,
						isNightMode: D
					}))), je = {
						className: g.a.link,
						onClick: e => {
							(null == me ? void 0 : me.removedByCategory) ? (e.preventDefault(), R(Object(N.f)({
								kind: x.b.Error,
								text: "Sorry, this content is no longer available.",
								duration: N.a
							}))) : Z && q && q(), ye({
								awardId: Ie,
								position: b.c.FIRST
							})
						},
						onMouseDown: Se,
						onKeyDown: Se
					}, He = null === (k = Object(l.a)(Ce)) || void 0 === k ? void 0 : k.host, ke = "reddit.com" === He || "www.reddit.com" === He;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("li", {
						className: xe
					}, ke ? s.a.createElement(p.a, w({}, je, {
						to: Ce
					}), Me) : s.a.createElement("a", w({}, je, {
						href: Ce,
						target: "_blank",
						rel: "noopener noreferrer"
					}), Me)), s.a.createElement(c.a, {
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.disableNotificationUpdates(Ne), Ue(b.d.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.hideNotification(ae), Ue(b.d.HideUpdates)
						},
						hideSubredditNotifications: () => {
							const t = b.d.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.hideSubredditNotifications(ue, () => (e => {
								P(Object(b.t)({
									...he,
									actionInfoType: e
								}))
							})(t)), Ue(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.blockAwarder(ge), Ue(b.d.BlockAwarder)
						},
						isInTooltip: Z,
						isHideNotifEligible: ee,
						isOpen: Ee,
						isToggleNotificationUpdateEligible: te,
						isToggleUpdateFromSubredditEligible: !(!ne || !ue),
						isBlockAwarderEligible: Te,
						sendInboxViewOverflow: () => P(Object(b.r)(he)),
						tooltipId: ve
					}), s.a.createElement(a.a, {
						onChange: e => {
							e.isIntersecting && !V && (P(Object(b.q)(he)), W(!0))
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: C
					}, s.a.createElement("div", null)))
				};
			t.default = _
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
		},
		"./src/reddit/selectors/experiments/inboxCTAs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			var i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/experiments/utils.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const l = e => Object(r.J)(e) || Object(r.K)(e),
				d = Object(i.a)(e => Object(o.c)(e, {
					experimentName: a.Gc,
					experimentEligibilitySelector: l
				}), s.a),
				c = Object(i.a)(d, e => e === a.Jc.SeePostCTAs),
				m = Object(i.a)(d, e => e === a.Jc.ReplyCTAs),
				u = Object(i.a)(d, e => e === a.Jc.AllCTAs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.bec0dfdb77eba67f28fd.js.map
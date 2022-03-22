// https://www.redditstatic.com/desktop2x/NotificationUnit.a87003910a391d5ef722.js
// Retrieved at 3/22/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var i = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/constants/icons.ts"),
				r = n("./src/reddit/models/NotificationInbox/index.ts");
			const d = {
				[r.b.Award]: s.a.award,
				[r.b.Chat]: s.a.chat,
				[r.b.Comment]: s.a.comment,
				[r.b.Heart]: s.a.heart,
				[r.b.Live]: s.a.video_live,
				[r.b.Lore]: s.a.topic_reading_fill,
				[r.b.NotifyAll]: s.a.notification_frequent_fill,
				[r.b.Redditor]: s.a.user,
				[r.b.Reply]: s.a.comment,
				[r.b.SortRising]: s.a.rising,
				[r.b.SortTop]: s.a.top,
				[r.b.Trophy]: s.a.trophy,
				[r.b.Upvote]: s.a.upvote
			};
			var l = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationUnit/index.m.less"),
				m = n.n(c);
			const u = `${i.a.assetPath}/img/cake_day.png`,
				b = e => {
					const {
						avatar: t,
						iconType: n,
						messageType: i
					} = e, o = d[n] || s.a.notification_fill, c = i === r.a.CakeDay, b = t && t.isNsfw, p = t && t.url;
					return a.a.createElement("span", {
						className: m.a.avatarContainer
					}, ((e, t, n) => t ? a.a.createElement("span", {
						className: m.a.nsfwAvatar
					}, "18+") : e ? a.a.createElement("img", {
						alt: "Slice of cake for cake day",
						className: m.a.avatar,
						src: u
					}) : a.a.createElement("img", {
						className: m.a.avatar,
						src: n || ""
					}))(c, b, p), a.a.createElement("span", {
						className: m.a.notificationIconContainer
					}, a.a.createElement(l.a, {
						name: o,
						isFilled: !0,
						className: m.a.NotifIcon
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/OverflowMenu.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var i, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/components/NotificationUnit/index.m.less"),
				b = n.n(u);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder", e.DecreaseSubredditUpdates = "DecreaseSubredditUpdates"
			}(i || (i = {}));
			const p = l.a.wrapped(m.a, "StyledDropdown", b.a),
				f = Object(d.a)(p),
				E = Object(c.a)(p, [r.a.Click]);
			f.displayName = "UnawareDropdown", E.displayName = "AwareDropdown";
			const v = e => {
				const {
					decreaseSubUpdates: t,
					disableNotificationUpdates: n,
					hideNotification: r,
					blockAwarder: d,
					isInTooltip: l,
					isHideNotifEligible: c,
					isOpen: m,
					isToggleLowUpdateFromSubredditEligible: u,
					isToggleNotificationUpdateEligible: p,
					isToggleUpdateFromSubredditEligible: v,
					isBlockAwarderEligible: x,
					hideSubredditNotifications: N,
					sendInboxViewOverflow: T,
					tooltipId: O
				} = e;
				Object(a.useEffect)(() => {
					m && T()
				}, [m]);
				const g = e => {
						let a;
						switch (e) {
							case i.HideNotif:
								a = {
									text: o.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: r
								};
								break;
							case i.HideSubUpdates:
								a = {
									text: o.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: N
								};
								break;
							case i.HideNotifUpdate:
								a = {
									text: o.fbt._("Don't get updates on this", null, {
										hk: "L7aUS"
									}),
									handler: n
								};
								break;
							case i.HideAwarder:
								a = {
									text: o.fbt._("Block awards from this user", null, {
										hk: "47U4V4"
									}),
									handler: d
								};
								break;
							case i.DecreaseSubredditUpdates:
								a = {
									text: o.fbt._("See less from this community", null, {
										hk: "2TiT9b"
									}),
									handler: t
								};
								break;
							default:
								a = null
						}
						if (!a) return;
						const {
							handler: l,
							text: c
						} = a;
						return s.a.createElement("button", {
							className: b.a.overflowMenuOption,
							onClick: l,
							type: "button"
						}, c)
					},
					h = l ? E : f;
				return s.a.createElement(h, {
					id: O,
					isOverlayOff: !0,
					isOpen: m,
					tooltipId: O,
					tooltipPosition: ["right", "top"],
					isFixed: !0
				}, s.a.createElement("div", {
					className: b.a.overflowMenuContainer
				}, c && g(i.HideNotif), u && g(i.DecreaseSubredditUpdates), v && g(i.HideSubUpdates), p && g(i.HideNotifUpdate), x && g(i.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/MetaData/index.tsx");
			var l = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM1.625,10A8.327,8.327,0,0,1,3.66,4.544l11.8,11.8A8.363,8.363,0,0,1,1.625,10ZM16.34,15.456,4.544,3.66a8.363,8.363,0,0,1,11.8,11.8Z"
			}));
			var c = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("path", {
				d: "M9.432 7.368a.856.856 0 00.472.128.912.912 0 00.496-.12.8.8 0 00.32-.304.8.8 0 000-.856.8.8 0 00-.32-.304.904.904 0 00-.464-.112.936.936 0 00-.44.104.8.8 0 00-.328.296.744.744 0 00-.128.432.8.8 0 00.112.424.8.8 0 00.28.312zM10.448 8.8a1.208 1.208 0 00-.544-.12 1.176 1.176 0 00-.536.12.904.904 0 00-.376.336.8.8 0 000 .92.913.913 0 00.376.312c.167.081.35.122.536.12.188.002.374-.039.544-.12a.945.945 0 00.384-.32.8.8 0 00.136-.448.848.848 0 00-.136-.464.976.976 0 00-.384-.336z"
			}), a.a.createElement("path", {
				d: "M14.672 5.384l-4.056-4.056a3.688 3.688 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.69 3.69 0 000-5.232zM6.512 11.6H4.984V6.624L3.672 7.2V5.776l2.4-1.088h.448L6.512 11.6zm5.6-.904c-.234.32-.552.57-.92.72a3.264 3.264 0 01-2.552 0 2.185 2.185 0 01-.912-.72 1.736 1.736 0 01-.336-1.04c-.005-.335.09-.663.272-.944.184-.293.437-.538.736-.712a1.864 1.864 0 01-.688-1.472A1.736 1.736 0 018 5.536a1.88 1.88 0 01.8-.68 2.712 2.712 0 012.248 0c.325.148.602.383.8.68.192.29.292.63.288.976a1.903 1.903 0 01-.696 1.456c.3.172.556.413.744.704.186.283.283.614.28.952a1.68 1.68 0 01-.368 1.072h.016z"
			}));
			var m = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, a.a.createElement("path", {
					d: "M14.672 5.384l-4.056-4.056a3.689 3.689 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.689 3.689 0 000-5.232zM8.928 3.952L8.704 9.36H7.296l-.24-5.408h1.872zm-.04 7.648a.96.96 0 01-.368.368 1.05 1.05 0 01-.52.136A1.033 1.033 0 017.48 12a1 1 0 01-.376-.376 1.072 1.072 0 010-1.04.944.944 0 01.376-.376.96.96 0 01.52-.144.975.975 0 01.52.144.928.928 0 01.368.376 1.024 1.024 0 010 1.048V11.6z"
				})),
				u = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				b = n("./src/reddit/models/NotificationInbox/index.ts"),
				p = n("./src/reddit/components/NotificationUnit/index.m.less"),
				f = n.n(p);
			const E = r.a.wrapped(u.b, "StateIcon", f.a);
			E.displayName = "Trash";
			const v = r.a.wrapped(l, "StateIcon", f.a);
			v.displayName = "Remove";
			const x = r.a.span("Text", f.a);
			x.displayName = "PostUnavailableText";
			const N = r.a.div("PostUnavailableInfo", f.a),
				T = r.a.wrapped(c, "WarningIcon", f.a),
				O = r.a.wrapped(m, "WarningIcon", f.a),
				g = e => {
					const {
						isNsfw: t,
						isSpoiler: n,
						obfuscatedThumbnailUrl: o,
						thumbnailUrl: s
					} = e;
					return !s || t && !o || n && !o ? null : t ? a.a.createElement("span", {
						className: f.a.postEmbedBlurredThumbnailContainer
					}, a.a.createElement("span", {
						className: f.a.postEmbedNSFWThumbnailIndicator
					}, "18+"), a.a.createElement("img", {
						alt: i.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: f.a.postEmbedBlurredThumbnail,
						src: o
					})) : n ? a.a.createElement("img", {
						alt: i.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: f.a.postEmbedBlurredThumbnail,
						src: o
					}) : a.a.createElement("img", {
						className: f.a.postEmbedThumbnail,
						src: s
					})
				},
				h = ({
					post: {
						commentCount: e = 0,
						isNsfw: t,
						isSpoiler: n,
						media: o,
						removedByCategory: r,
						score: l = 0,
						thumbnail: c,
						title: m
					},
					isUnread: u
				}) => {
					var p, h;
					const w = r === b.c.Deleted,
						C = r && r !== b.c.Deleted,
						A = Object(s.a)(f.a.postEmbedContainer, {
							[f.a.unread]: u
						}),
						I = Object(s.a)(f.a.postEmbedContent, {
							[f.a.deleted]: w || C
						}),
						S = (null === (h = null === (p = null == o ? void 0 : o.obfuscated) || void 0 === p ? void 0 : p.content) || void 0 === h ? void 0 : h.url) && c.url,
						_ = null == c ? void 0 : c.url;
					return a.a.createElement("span", {
						className: A
					}, a.a.createElement("span", {
						className: I
					}, a.a.createElement("span", null, a.a.createElement("span", {
						className: f.a.postEmbedTitleContainer
					}, t && a.a.createElement(T, null), n && a.a.createElement(O, null), a.a.createElement("p", {
						className: f.a.postEmbedTitle
					}, m)), a.a.createElement("span", {
						className: f.a.postEmbedMeta
					}, !w && !C && a.a.createElement(a.a.Fragment, null, a.a.createElement(d.b, {
						isScoreHidden: !1,
						score: l,
						useUpvotes: !0
					}), a.a.createElement(d.c, null), Object(d.d)(e)), w && a.a.createElement(N, null, a.a.createElement(E, null), a.a.createElement(x, null, i.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), C && a.a.createElement(N, null, a.a.createElement(v, null), a.a.createElement(x, null, i.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), a.a.createElement(g, {
						isNsfw: t,
						isSpoiler: n,
						obfuscatedThumbnailUrl: S,
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
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
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
					isToggleLowUpdateFromSubredditEligible: u,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: p,
					sendInboxClickOverflow: f,
					sentAt: E,
					setActiveOverflowMenuId: v,
					title: x
				} = e, N = n || b || p || u, T = Object(a.a)(m.a.menuButton, {
					[m.a.isOpen]: c
				}), O = Date.parse(E) / s.Sb;
				return o.a.createElement("span", {
					className: m.a.topBar
				}, o.a.createElement("span", null, o.a.createElement("span", {
					className: Object(a.a)(m.a.title, {
						[m.a["m-tooltip"]]: i
					})
				}, x), o.a.createElement(d.c, null), o.a.createElement("span", {
					className: m.a.timeAgo
				}, Object(r.a)(O, !0))), N && o.a.createElement("button", {
					"aria-expanded": c,
					"aria-haspopup": !0,
					className: T,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), c ? v("") : (f(), v(t))
					}
				}, o.a.createElement(l.a, {
					name: "overflow_horizontal",
					className: m.a.MenuIcon
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				d = n.n(r),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/parseUrl.ts"),
				m = n("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				u = n("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				b = n("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				p = n("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/trackers/inbox.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/models/NotificationInbox/index.ts"),
				N = n("./node_modules/react-redux/es/index.js"),
				T = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/selectors/experiments/inboxCTAsV2.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/NotificationUnit/index.m.less"),
				C = n.n(w);

			function A() {
				return (A = Object.assign || function(e) {
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
				S = "",
				_ = .5,
				U = e => {
					var t, n, i, s, w, U, y, j, M, R, k, D, P;
					const L = Object(v.a)(),
						H = Object(N.d)(),
						B = Object(N.e)(h.cb),
						F = Object(N.e)(g.h),
						V = Object(N.e)(g.i),
						W = Object(N.e)(g.g),
						z = Object(N.e)(g.b),
						Y = Object(N.e)(g.a),
						Z = Object(N.e)(g.f),
						G = Object(N.e)(g.e),
						K = Object(N.e)(g.c),
						q = Object(N.e)(g.d),
						[J, $] = Object(r.useState)(!1),
						{
							activeOverflowMenuId: Q,
							isInboxPostEmbedEnabled: X,
							isInTooltip: ee,
							notification: te,
							setActiveOverflowMenuId: ne,
							onItemClick: ie
						} = e;
					if (!te) return null;
					const {
						avatar: oe,
						body: ae,
						context: se,
						deeplinkUrl: re,
						isHideNotifEligible: de,
						isToggleLowUpdateFromSubredditEligible: le,
						isToggleNotificationUpdateEligible: ce,
						isToggleUpdateFromSubredditEligible: me,
						icon: ue,
						id: be,
						readAt: pe,
						sentAt: fe,
						title: Ee
					} = te, ve = null == se ? void 0 : se.messageType, xe = null === (n = null === (t = null == se ? void 0 : se.comment) || void 0 === t ? void 0 : t.parent) || void 0 === n ? void 0 : n.id, Ne = null === (i = null == se ? void 0 : se.post) || void 0 === i ? void 0 : i.id, Te = null == se ? void 0 : se.post, Oe = null === (s = null == se ? void 0 : se.subreddit) || void 0 === s ? void 0 : s.id, ge = null == se ? void 0 : se.isBodyHidden, he = null == se ? void 0 : se.isPostHidden, we = !pe, Ce = `notif-${ee?"tooltip":""}-menu-${be}`, Ae = Ce === Q, Ie = se.messageType === x.a.CommentReply, Se = Ie ? xe : Ne, _e = Object(l.a)(e.className, C.a.notificationItem, {
						[C.a.unread]: we,
						[C.a.isNightMode]: B
					}), Ue = F || W || V || z || Y || Z || G || K || q, ye = {
						id: be,
						isClicked: !!pe,
						isViewed: !0,
						type: ve
					}, je = se.messageType === x.a.AwardReceived, Me = ve === x.a.LifecyclePostSuggestions, Re = je ? null === (w = null == se ? void 0 : se.awarding) || void 0 === w ? void 0 : w.id : "", ke = null === (y = null === (U = null == se ? void 0 : se.awarding) || void 0 === U ? void 0 : U.target) || void 0 === y ? void 0 : y.permalink, De = null === (M = null === (j = null == se ? void 0 : se.awarding) || void 0 === j ? void 0 : j.award) || void 0 === M ? void 0 : M.id;
					let Pe = (null === (R = null == se ? void 0 : se.post) || void 0 === R ? void 0 : R.permalink) || re;
					je && ke ? Pe = ke : Me && re && (Pe = re);
					const Le = null === (D = null === (k = null == se ? void 0 : se.awarding) || void 0 === k ? void 0 : k.awarder) || void 0 === D ? void 0 : D.isAcceptingChats,
						He = e => {
							L(Object(E.l)({
								...ye,
								actionInfoType: e
							}))
						},
						Be = e => {
							L(Object(E.x)({
								...ye,
								actionInfoType: e
							}))
						},
						Fe = () => {
							e.markNotificationAsRead(be, ve)
						},
						Ve = e => L(Object(E.j)({
							...ye,
							...e
						})),
						We = d.a.createElement(d.a.Fragment, null, d.a.createElement(m.a, {
							avatar: oe,
							iconType: ue,
							messageType: ve
						}), d.a.createElement("span", {
							className: C.a.contentContainer
						}, d.a.createElement(p.a, {
							dropdownId: Ce,
							isHideNotifEligible: de,
							isInTooltip: ee,
							isOverflowMenuOpen: Ae,
							isToggleNotificationUpdateEligible: ce,
							isToggleUpdateFromSubredditEligible: me,
							isToggleLowUpdateFromSubredditEligible: le,
							sendInboxClickOverflow: () => L(Object(E.k)({
								...ye,
								awardId: De
							})),
							sentAt: fe,
							setActiveOverflowMenuId: ne,
							title: Ee
						}), X && Te && !he && d.a.createElement(b.a, {
							isUnread: we,
							post: Te
						}), X && !ge && d.a.createElement("span", {
							className: C.a.body
						}, ae), !X && d.a.createElement("span", {
							className: C.a.body
						}, ae), (Le || Ue || je || Ie) && d.a.createElement(I, {
							context: se,
							notificationId: be,
							isUnread: we,
							isFullWidth: ee,
							onEvent: Ve,
							isInboxCTAsV2ReplyEnabled: F,
							isInboxCTAsV2AllEnabled: W,
							isInboxCTAsV2SeePostEnabled: V,
							isD2xCTASubRecSeeCommentEnabled: z,
							isD2xCTASubRecCheckSelectorEnabled: Y,
							isCommentReplyCTAJoinConversationEnabled: Z,
							isCommentReplyCTABackEnabled: G,
							isCTATrendingReplyEnabled: K,
							isCTATrendingSeePostEnabled: q,
							deeplinkUrl: re,
							isNightMode: B
						}))),
						ze = {
							className: C.a.link,
							onClick: e => {
								(null == Te ? void 0 : Te.removedByCategory) ? (e.preventDefault(), H(Object(T.f)({
									kind: O.b.Error,
									text: a.fbt._("Sorry, this content is no longer available.", null, {
										hk: "3sVhIi"
									}),
									duration: T.a
								}))) : ee && ie && ie(), Ve({
									postId: Ne,
									subredditId: Oe,
									awardId: De,
									position: E.d.FIRST
								})
							},
							onMouseDown: Fe,
							onKeyDown: Fe
						},
						Ye = null === (P = Object(c.a)(Pe)) || void 0 === P ? void 0 : P.host,
						Ze = "reddit.com" === Ye || "www.reddit.com" === Ye;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement("li", {
						className: _e
					}, Ze ? d.a.createElement(f.a, A({}, ze, {
						to: Pe
					}), We) : d.a.createElement("a", A({}, ze, {
						href: Pe,
						target: "_blank",
						rel: "noopener noreferrer"
					}), We)), d.a.createElement(u.a, {
						decreaseSubUpdates: () => {
							const t = E.e.DecreaseSubredditUpdates;
							e.isInTooltip && e.setActiveOverflowMenuId(S), Oe && e.decreaseSubredditNotifications(Oe, () => Be(t)), He(t)
						},
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(S), e.disableNotificationUpdates(Se), He(E.e.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(S), e.hideNotification(be), He(E.e.HideUpdates)
						},
						hideSubredditNotifications: () => {
							const t = E.e.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId(S), e.hideSubredditNotifications(Oe, () => Be(t)), He(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(S), e.blockAwarder(Re), He(E.e.BlockAwarder)
						},
						isInTooltip: ee,
						isHideNotifEligible: de,
						isOpen: Ae,
						isToggleLowUpdateFromSubredditEligible: le,
						isToggleNotificationUpdateEligible: ce,
						isToggleUpdateFromSubredditEligible: !(!me || !Oe),
						isBlockAwarderEligible: je,
						sendInboxViewOverflow: () => L(Object(E.v)(ye)),
						tooltipId: Ce
					}), d.a.createElement(o.a, {
						onChange: e => {
							e.isIntersecting && !J && (L(Object(E.u)(ye)), $(!0))
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: _
					}, d.a.createElement("div", null)))
				};
			t.default = U
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
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
				const n = Object(a.a)(e, t);
				class i extends o.a.PureComponent {
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
						return o.a.createElement(n, d({}, this.props, {
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
				return b
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				l = n.n(d);
			const c = s.a.span("metaText", l.a),
				m = e => a.a.createElement(c, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
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
					return a.a.createElement(c, o, l)
				},
				b = e => a.a.createElement(c, null, i.fbt._({
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
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = n.n(s);
			const d = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var i, o, a, s;
			n.d(t, "a", (function() {
					return i
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(i || (i = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(o || (o = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(a || (a = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/inboxCTAsV2.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "a", (function() {
				return x
			}));
			var i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/experiments/utils.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const d = e => Object(r.O)(e) || Object(r.P)(e),
				l = Object(i.a)(e => Object(a.c)(e, {
					experimentName: o.xb,
					experimentEligibilitySelector: d
				}), s.a),
				c = Object(i.a)(l, e => e === o.Bd.TrendingReplyCTAs),
				m = Object(i.a)(l, e => e === o.Bd.TrendingSeePostCTAs),
				u = Object(i.a)(l, e => e === o.Bd.CommentReplyBackCTAs),
				b = Object(i.a)(l, e => e === o.Bd.CommentJoinConversationCTAs),
				p = Object(i.a)(l, e => e === o.Bd.SeePostCTAs),
				f = Object(i.a)(l, e => e === o.Bd.ReplyCTAs),
				E = Object(i.a)(l, e => e === o.Bd.AllCTAs),
				v = Object(i.a)(l, e => e === o.Bd.SubRecSeeCommentsCTAs),
				x = Object(i.a)(l, e => e === o.Bd.SubRecCheckCTAs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.a87003910a391d5ef722.js.map
// https://www.redditstatic.com/desktop2x/NotificationUnit.0f956839f4b912094537.js
// Retrieved at 10/25/2021, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return p
			}));
			var n = i("./src/config.ts"),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				s = i("./src/lib/constants/icons.ts"),
				r = i("./src/reddit/models/NotificationInbox/index.ts");
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
			var d = i("./src/reddit/icons/fonts/index.tsx"),
				c = i("./src/reddit/components/NotificationUnit/index.m.less"),
				m = i.n(c);
			const u = `${n.a.assetPath}/img/cake_day.png`,
				p = e => {
					const {
						avatar: t,
						iconType: i,
						messageType: n
					} = e, a = l[i] || s.a.notification_fill, c = n === r.a.CakeDay, p = t && t.isNsfw, b = t && t.url;
					return o.a.createElement("span", {
						className: m.a.avatarContainer
					}, ((e, t, i) => t ? o.a.createElement("span", {
						className: m.a.nsfwAvatar
					}, "18+") : e ? o.a.createElement("img", {
						alt: "Slice of cake for cake day",
						className: m.a.avatar,
						src: u
					}) : o.a.createElement("img", {
						className: m.a.avatar,
						src: i || ""
					}))(c, p, b), o.a.createElement("span", {
						className: m.a.notificationIconContainer
					}, o.a.createElement(d.a, {
						name: a,
						isFilled: !0,
						className: m.a.NotifIcon
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/OverflowMenu.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return E
			}));
			var n, a = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				r = i("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = i("./src/higherOrderComponents/asTooltip.tsx"),
				d = i("./src/lib/lessComponent.tsx"),
				c = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.tsx"),
				u = i("./src/reddit/components/NotificationUnit/index.m.less"),
				p = i.n(u);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder", e.DecreaseSubredditUpdates = "DecreaseSubredditUpdates"
			}(n || (n = {}));
			const b = d.a.wrapped(m.a, "StyledDropdown", p.a),
				f = Object(l.a)(b),
				v = Object(c.a)(b, [r.a.Click]);
			f.displayName = "UnawareDropdown", v.displayName = "AwareDropdown";
			const E = e => {
				const {
					decreaseSubUpdates: t,
					disableNotificationUpdates: i,
					hideNotification: r,
					blockAwarder: l,
					isInTooltip: d,
					isHideNotifEligible: c,
					isOpen: m,
					isToggleLowUpdateFromSubredditEligible: u,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: E,
					isBlockAwarderEligible: x,
					hideSubredditNotifications: N,
					sendInboxViewOverflow: g,
					tooltipId: O
				} = e;
				Object(o.useEffect)(() => {
					m && g()
				}, [m]);
				const T = e => {
						let o;
						switch (e) {
							case n.HideNotif:
								o = {
									text: a.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: r
								};
								break;
							case n.HideSubUpdates:
								o = {
									text: a.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: N
								};
								break;
							case n.HideNotifUpdate:
								o = {
									text: a.fbt._("Don't get updates on this", null, {
										hk: "L7aUS"
									}),
									handler: i
								};
								break;
							case n.HideAwarder:
								o = {
									text: a.fbt._("Block awards from this user", null, {
										hk: "47U4V4"
									}),
									handler: l
								};
								break;
							case n.DecreaseSubredditUpdates:
								o = {
									text: a.fbt._("See less from this community", null, {
										hk: "2TiT9b"
									}),
									handler: t
								};
								break;
							default:
								o = null
						}
						if (!o) return;
						const {
							handler: d,
							text: c
						} = o;
						return s.a.createElement("button", {
							className: p.a.overflowMenuOption,
							onClick: d,
							type: "button"
						}, c)
					},
					h = d ? v : f;
				return s.a.createElement(h, {
					id: O,
					isOverlayOff: !0,
					isOpen: m,
					tooltipId: O,
					tooltipPosition: ["right", "top"]
				}, s.a.createElement("div", {
					className: p.a.overflowMenuContainer
				}, c && T(n.HideNotif), u && T(n.DecreaseSubredditUpdates), E && T(n.HideSubUpdates), b && T(n.HideNotifUpdate), x && T(n.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return h
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				s = i("./src/lib/classNames/index.ts"),
				r = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/controls/MetaData/index.tsx");
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
				u = i("./src/reddit/icons/svgs/Trash2/index.tsx"),
				p = i("./src/reddit/models/NotificationInbox/index.ts"),
				b = i("./src/reddit/components/NotificationUnit/index.m.less"),
				f = i.n(b);
			const v = r.a.wrapped(u.b, "StateIcon", f.a);
			v.displayName = "Trash";
			const E = r.a.wrapped(d, "StateIcon", f.a);
			E.displayName = "Remove";
			const x = r.a.span("Text", f.a);
			x.displayName = "PostUnavailableText";
			const N = r.a.div("PostUnavailableInfo", f.a),
				g = r.a.wrapped(c, "WarningIcon", f.a),
				O = r.a.wrapped(m, "WarningIcon", f.a),
				T = e => {
					const {
						isNsfw: t,
						isSpoiler: i,
						obfuscatedThumbnailUrl: a,
						thumbnailUrl: s
					} = e;
					return !s || t && !a || i && !a ? null : t ? o.a.createElement("span", {
						className: f.a.postEmbedBlurredThumbnailContainer
					}, o.a.createElement("span", {
						className: f.a.postEmbedNSFWThumbnailIndicator
					}, "18+"), o.a.createElement("img", {
						alt: n.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: f.a.postEmbedBlurredThumbnail,
						src: a
					})) : i ? o.a.createElement("img", {
						alt: n.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: f.a.postEmbedBlurredThumbnail,
						src: a
					}) : o.a.createElement("img", {
						className: f.a.postEmbedThumbnail,
						src: s
					})
				},
				h = ({
					post: {
						commentCount: e = 0,
						isNsfw: t,
						isSpoiler: i,
						media: a,
						removedByCategory: r,
						score: d = 0,
						thumbnail: c,
						title: m
					},
					isUnread: u
				}) => {
					var b, h;
					const w = r === p.c.Deleted,
						I = r && r !== p.c.Deleted,
						A = Object(s.a)(f.a.postEmbedContainer, {
							[f.a.unread]: u
						}),
						U = Object(s.a)(f.a.postEmbedContent, {
							[f.a.deleted]: w || I
						}),
						S = (null === (h = null === (b = null == a ? void 0 : a.obfuscated) || void 0 === b ? void 0 : b.content) || void 0 === h ? void 0 : h.url) && c.url,
						C = null == c ? void 0 : c.url;
					return o.a.createElement("span", {
						className: A
					}, o.a.createElement("span", {
						className: U
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: f.a.postEmbedTitleContainer
					}, t && o.a.createElement(g, null), i && o.a.createElement(O, null), o.a.createElement("p", {
						className: f.a.postEmbedTitle
					}, m)), o.a.createElement("span", {
						className: f.a.postEmbedMeta
					}, !w && !I && o.a.createElement(o.a.Fragment, null, o.a.createElement(l.b, {
						isScoreHidden: !1,
						score: d,
						useUpvotes: !0
					}), o.a.createElement(l.c, null), Object(l.d)(e)), w && o.a.createElement(N, null, o.a.createElement(v, null), o.a.createElement(x, null, n.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), I && o.a.createElement(N, null, o.a.createElement(E, null), o.a.createElement(x, null, n.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), o.a.createElement(T, {
						isNsfw: t,
						isSpoiler: i,
						obfuscatedThumbnailUrl: S,
						thumbnailUrl: C
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/TopBar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			}));
			var n = i("./node_modules/react/index.js"),
				a = i.n(n),
				o = i("./src/lib/classNames/index.ts"),
				s = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/timeAgo/index.ts"),
				l = i("./src/reddit/controls/MetaData/index.tsx"),
				d = i("./src/reddit/icons/fonts/index.tsx"),
				c = i("./src/reddit/components/NotificationUnit/index.m.less"),
				m = i.n(c);
			const u = e => {
				const {
					dropdownId: t,
					isHideNotifEligible: i,
					isInTooltip: n,
					isOverflowMenuOpen: c,
					isToggleLowUpdateFromSubredditEligible: u,
					isToggleNotificationUpdateEligible: p,
					isToggleUpdateFromSubredditEligible: b,
					sendInboxClickOverflow: f,
					sentAt: v,
					setActiveOverflowMenuId: E,
					title: x
				} = e, N = i || p || b || u, g = Object(o.a)(m.a.menuButton, {
					[m.a.isOpen]: c
				}), O = Date.parse(v) / s.Qb;
				return a.a.createElement("span", {
					className: m.a.topBar
				}, a.a.createElement("span", null, a.a.createElement("span", {
					className: Object(o.a)(m.a.title, {
						[m.a["m-tooltip"]]: n
					})
				}, x), a.a.createElement(l.c, null), a.a.createElement("span", {
					className: m.a.timeAgo
				}, Object(r.a)(O, !0))), N && a.a.createElement("button", {
					"aria-expanded": c,
					"aria-haspopup": !0,
					className: g,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), c ? E("") : (f(), E(t))
					}
				}, a.a.createElement(d.a, {
					name: "overflow_horizontal",
					className: m.a.MenuIcon
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/helpers/parseUrl.ts"),
				d = i("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				c = i("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				m = i("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				u = i("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				p = i("./src/reddit/controls/InternalLink/index.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				v = i("./src/reddit/models/NotificationInbox/index.ts"),
				E = i("./node_modules/react-redux/es/index.js"),
				x = i("./src/reddit/actions/toaster.ts"),
				N = i("./src/reddit/models/Toast/index.ts"),
				g = i("./src/reddit/selectors/experiments/inboxCTAs.ts"),
				O = i("./src/reddit/selectors/user.ts"),
				T = i("./src/reddit/components/NotificationUnit/index.m.less"),
				h = i.n(T);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-Button",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!i.m[t]
					},
					importAsync: () => i.e("reddit-components-NotificationUnit-Button").then(i.bind(null, "./src/reddit/components/NotificationUnit/Button.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return i(t)
					},
					resolve() {
						return "./src/reddit/components/NotificationUnit/Button.tsx"
					}
				}),
				A = "",
				U = .5,
				S = e => {
					var t, i, n, T, S, C, _, y, M, j, k, D;
					const R = Object(f.a)(),
						P = Object(E.d)(),
						H = Object(E.e)(O.X),
						L = Object(E.e)(g.b),
						F = Object(E.e)(g.c),
						B = Object(E.e)(g.a),
						[V, W] = Object(o.useState)(!1),
						{
							activeOverflowMenuId: z,
							isInboxPostEmbedEnabled: Y,
							isInTooltip: Z,
							notification: K,
							setActiveOverflowMenuId: G,
							onItemClick: q
						} = e;
					if (!K) return null;
					const {
						avatar: X,
						body: $,
						context: J,
						deeplinkUrl: Q,
						isHideNotifEligible: ee,
						isToggleLowUpdateFromSubredditEligible: te,
						isToggleNotificationUpdateEligible: ie,
						isToggleUpdateFromSubredditEligible: ne,
						icon: ae,
						id: oe,
						readAt: se,
						sentAt: re,
						title: le
					} = K, de = null == J ? void 0 : J.messageType, ce = null === (i = null === (t = null == J ? void 0 : J.comment) || void 0 === t ? void 0 : t.parent) || void 0 === i ? void 0 : i.id, me = null === (n = null == J ? void 0 : J.post) || void 0 === n ? void 0 : n.id, ue = null == J ? void 0 : J.post, pe = null === (T = null == J ? void 0 : J.subreddit) || void 0 === T ? void 0 : T.id, be = null == J ? void 0 : J.isBodyHidden, fe = null == J ? void 0 : J.isPostHidden, ve = !se, Ee = `notif-${Z?"tooltip":""}-menu-${oe}`, xe = Ee === z, Ne = de === v.a.CommentReply ? ce : me, ge = Object(r.a)(e.className, h.a.notificationItem, {
						[h.a.unread]: ve,
						[h.a.isNightMode]: H
					}), Oe = L || B || F, Te = {
						id: oe,
						isClicked: !!se,
						isViewed: !0,
						type: de
					}, he = J.messageType === v.a.AwardReceived, we = he ? null === (S = null == J ? void 0 : J.awarding) || void 0 === S ? void 0 : S.id : "", Ie = null === (_ = null === (C = null == J ? void 0 : J.awarding) || void 0 === C ? void 0 : C.target) || void 0 === _ ? void 0 : _.permalink, Ae = null === (y = null == J ? void 0 : J.awarding) || void 0 === y ? void 0 : y.award.id, Ue = null === (M = null == J ? void 0 : J.post) || void 0 === M ? void 0 : M.permalink, Se = he && Ie ? Ie : Ue || Q, Ce = null === (k = null === (j = null == J ? void 0 : J.awarding) || void 0 === j ? void 0 : j.awarder) || void 0 === k ? void 0 : k.isAcceptingChats, _e = e => {
						R(Object(b.k)({
							...Te,
							actionInfoType: e
						}))
					}, ye = e => {
						R(Object(b.t)({
							...Te,
							actionInfoType: e
						}))
					}, Me = () => {
						e.markNotificationAsRead(oe, de)
					}, je = e => R(Object(b.i)({
						...Te,
						...e
					})), ke = s.a.createElement(s.a.Fragment, null, s.a.createElement(d.a, {
						avatar: X,
						iconType: ae,
						messageType: de
					}), s.a.createElement("span", {
						className: h.a.contentContainer
					}, s.a.createElement(u.a, {
						dropdownId: Ee,
						isHideNotifEligible: ee,
						isInTooltip: Z,
						isOverflowMenuOpen: xe,
						isToggleNotificationUpdateEligible: ie,
						isToggleUpdateFromSubredditEligible: ne,
						isToggleLowUpdateFromSubredditEligible: te,
						sendInboxClickOverflow: () => R(Object(b.j)({
							...Te,
							awardId: Ae
						})),
						sentAt: re,
						setActiveOverflowMenuId: G,
						title: le
					}), Y && ue && !fe && s.a.createElement(m.a, {
						isUnread: ve,
						post: ue
					}), Y && !be && s.a.createElement("span", {
						className: h.a.body
					}, $), !Y && s.a.createElement("span", {
						className: h.a.body
					}, $), (Ce || Oe) && s.a.createElement(I, {
						context: J,
						notificationId: oe,
						isUnread: ve,
						isFullWidth: Z,
						onEvent: je,
						isInboxCTAsReplyEnabled: L,
						isInboxCTAsAllEnabled: B,
						isInboxCTAsSeePostEnabled: F,
						deeplinkUrl: Q,
						isNightMode: H
					}))), De = {
						className: h.a.link,
						onClick: e => {
							(null == ue ? void 0 : ue.removedByCategory) ? (e.preventDefault(), P(Object(x.f)({
								kind: N.b.Error,
								text: "Sorry, this content is no longer available.",
								duration: x.a
							}))) : Z && q && q(), je({
								awardId: Ae,
								position: b.c.FIRST
							})
						},
						onMouseDown: Me,
						onKeyDown: Me
					}, Re = null === (D = Object(l.a)(Se)) || void 0 === D ? void 0 : D.host, Pe = "reddit.com" === Re || "www.reddit.com" === Re;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("li", {
						className: ge
					}, Pe ? s.a.createElement(p.a, w({}, De, {
						to: Se
					}), ke) : s.a.createElement("a", w({}, De, {
						href: Se,
						target: "_blank",
						rel: "noopener noreferrer"
					}), ke)), s.a.createElement(c.a, {
						decreaseSubUpdates: () => {
							const t = b.d.DecreaseSubredditUpdates;
							e.isInTooltip && e.setActiveOverflowMenuId(A), pe && e.decreaseSubredditNotifications(pe, () => ye(t)), _e(t)
						},
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.disableNotificationUpdates(Ne), _e(b.d.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.hideNotification(oe), _e(b.d.HideUpdates)
						},
						hideSubredditNotifications: () => {
							const t = b.d.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.hideSubredditNotifications(pe, () => ye(t)), _e(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId(A), e.blockAwarder(we), _e(b.d.BlockAwarder)
						},
						isInTooltip: Z,
						isHideNotifEligible: ee,
						isOpen: xe,
						isToggleLowUpdateFromSubredditEligible: te,
						isToggleNotificationUpdateEligible: ie,
						isToggleUpdateFromSubredditEligible: !(!ne || !pe),
						isBlockAwarderEligible: he,
						sendInboxViewOverflow: () => R(Object(b.r)(Te)),
						tooltipId: Ee
					}), s.a.createElement(a.a, {
						onChange: e => {
							e.isIntersecting && !V && (R(Object(b.q)(Te)), W(!0))
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: U
					}, s.a.createElement("div", null)))
				};
			t.default = S
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				a = i.n(n),
				o = i("./src/higherOrderComponents/asTooltip.tsx"),
				s = i("./src/reddit/constants/elementIds.ts"),
				r = i("./src/reddit/contexts/InsideOverlay.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const i = Object(o.a)(e, t);
				class n extends a.a.PureComponent {
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
						return a.a.createElement(i, l({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(r.b)(n)
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, i) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			})), i.d(t, "c", (function() {
				return m
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "d", (function() {
				return p
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/lib/prettyPrintNumber/index.ts"),
				l = (i("./src/lib/timeAgo/index.ts"), i("./src/reddit/controls/MetaData/index.m.less")),
				d = i.n(l);
			const c = s.a.span("metaText", d.a),
				m = e => o.a.createElement(c, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: i,
					...a
				}) => {
					const s = Object(r.b)(t),
						l = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "2L3T21"
						}),
						d = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : i ? l : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "gf67v"
						});
					return o.a.createElement(c, a, d)
				},
				p = e => o.a.createElement(c, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(r.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, i) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			}));
			var n = i("./node_modules/react/index.js"),
				a = i.n(n),
				o = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = i.n(s);
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
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, i) {
			"use strict";
			var n, a, o, s;
			i.d(t, "a", (function() {
					return n
				})), i.d(t, "b", (function() {
					return a
				})), i.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(n || (n = {})),
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
		"./src/reddit/selectors/experiments/inboxCTAs.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return c
			})), i.d(t, "b", (function() {
				return m
			})), i.d(t, "a", (function() {
				return u
			}));
			var n = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/constants/experiments.ts"),
				o = i("./src/reddit/helpers/chooseVariant/index.ts"),
				s = i("./src/reddit/selectors/experiments/utils.ts"),
				r = i("./src/reddit/selectors/user.ts");
			const l = e => Object(r.J)(e) || Object(r.K)(e),
				d = Object(n.a)(e => Object(o.c)(e, {
					experimentName: a.Xc,
					experimentEligibilitySelector: l
				}), s.a),
				c = Object(n.a)(d, e => e === a.ad.SeePostCTAs),
				m = Object(n.a)(d, e => e === a.ad.ReplyCTAs),
				u = Object(n.a)(d, e => e === a.ad.AllCTAs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.0f956839f4b912094537.js.map
// https://www.redditstatic.com/desktop2x/NotificationUnit.8f2831233b11910e00f1.js
// Retrieved at 7/11/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return f
			}));
			var n = i("./src/config.ts"),
				o = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				s = i.n(a),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/constants/icons.ts"),
				d = i("./src/reddit/models/NotificationInbox/index.ts");
			const l = {
				[d.b.Award]: c.a.award,
				[d.b.Chat]: c.a.chat,
				[d.b.Comment]: c.a.comment,
				[d.b.Heart]: c.a.heart,
				[d.b.Live]: c.a.video_live,
				[d.b.Lore]: c.a.topic_reading_fill,
				[d.b.NotifyAll]: c.a.notification_frequent_fill,
				[d.b.Redditor]: c.a.user,
				[d.b.Reply]: c.a.comment,
				[d.b.SortRising]: c.a.rising,
				[d.b.SortTop]: c.a.top,
				[d.b.Trophy]: c.a.trophy,
				[d.b.Upvote]: c.a.upvote
			};
			var u = i("./src/reddit/icons/fonts/index.tsx"),
				p = i("./src/reddit/components/NotificationUnit/index.m.less"),
				b = i.n(p);
			const m = `${n.a.assetPath}/img/cake_day.png`,
				f = e => {
					const {
						avatar: t,
						iconType: i,
						messageType: n
					} = e, a = l[i] || c.a.notification_fill, p = n === d.a.CakeDay, f = t && t.isNsfw, x = t && t.url;
					return s.a.createElement("span", {
						className: b.a.avatarContainer
					}, ((e, t, i, n) => t ? s.a.createElement("span", {
						className: Object(r.a)(b.a.nsfwAvatar, {
							[b.a.inAppNotification]: n
						})
					}, "18+") : e ? s.a.createElement("img", {
						alt: o.fbt._("Slice of cake for cake day", null, {
							hk: "1E8fjv"
						}),
						className: b.a.avatar,
						src: m
					}) : s.a.createElement("img", {
						className: Object(r.a)(b.a.avatar, {
							[b.a.inAppNotification]: n
						}),
						src: i || ""
					}))(p, f, x, e.isInAppNotification), s.a.createElement("span", {
						className: Object(r.a)(b.a.notificationIconContainer, {
							[b.a.inAppNotification]: e.isInAppNotification
						})
					}, s.a.createElement(u.a, {
						name: a,
						isFilled: !0,
						className: b.a.NotifIcon
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/OverflowMenu.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return N
			}));
			var n, o = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				s = i.n(a),
				r = i("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = i("./src/higherOrderComponents/asTooltip.tsx"),
				d = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = i("./src/reddit/controls/Dropdown/index.tsx"),
				p = i("./src/reddit/components/NotificationUnit/index.m.less"),
				b = i.n(p);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder", e.DecreaseSubredditUpdates = "DecreaseSubredditUpdates"
			}(n || (n = {}));
			const m = d.a.wrapped(u.a, "StyledDropdown", b.a),
				f = Object(c.a)(m),
				x = Object(l.a)(m, [r.a.Click]);
			f.displayName = "UnawareDropdown", x.displayName = "AwareDropdown";
			const N = e => {
				const {
					decreaseSubUpdates: t,
					disableNotificationUpdates: i,
					hideNotification: r,
					blockAwarder: c,
					isInTooltip: d,
					isHideNotifEligible: l,
					isOpen: u,
					isToggleLowUpdateFromSubredditEligible: p,
					isToggleNotificationUpdateEligible: m,
					isToggleUpdateFromSubredditEligible: N,
					isBlockAwarderEligible: v,
					hideSubredditNotifications: E,
					sendInboxViewOverflow: I,
					tooltipId: g
				} = e;
				Object(a.useEffect)(() => {
					u && I()
				}, [u]);
				const O = e => {
						let a;
						switch (e) {
							case n.HideNotif:
								a = {
									text: o.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: r
								};
								break;
							case n.HideSubUpdates:
								a = {
									text: o.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: E
								};
								break;
							case n.HideNotifUpdate:
								a = {
									text: o.fbt._("Don't get updates on this", null, {
										hk: "L7aUS"
									}),
									handler: i
								};
								break;
							case n.HideAwarder:
								a = {
									text: o.fbt._("Block awards from this user", null, {
										hk: "47U4V4"
									}),
									handler: c
								};
								break;
							case n.DecreaseSubredditUpdates:
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
							handler: d,
							text: l
						} = a;
						return s.a.createElement("button", {
							className: b.a.overflowMenuOption,
							onClick: d,
							type: "button"
						}, l)
					},
					_ = d ? x : f;
				return s.a.createElement(_, {
					id: g,
					isOverlayOff: !0,
					isOpen: u,
					tooltipId: g,
					tooltipPosition: ["right", "top"],
					isFixed: !0
				}, s.a.createElement("div", {
					className: b.a.overflowMenuContainer
				}, l && O(n.HideNotif), p && O(n.DecreaseSubredditUpdates), N && O(n.HideSubUpdates), m && O(n.HideNotifUpdate), v && O(n.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return f
			})), i.d(t, "a", (function() {
				return x
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				s = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/controls/MetaData/index.tsx");
			var c = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM1.625,10A8.327,8.327,0,0,1,3.66,4.544l11.8,11.8A8.363,8.363,0,0,1,1.625,10ZM16.34,15.456,4.544,3.66a8.363,8.363,0,0,1,11.8,11.8Z"
			}));
			var d = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("path", {
				d: "M9.432 7.368a.856.856 0 00.472.128.912.912 0 00.496-.12.8.8 0 00.32-.304.8.8 0 000-.856.8.8 0 00-.32-.304.904.904 0 00-.464-.112.936.936 0 00-.44.104.8.8 0 00-.328.296.744.744 0 00-.128.432.8.8 0 00.112.424.8.8 0 00.28.312zM10.448 8.8a1.208 1.208 0 00-.544-.12 1.176 1.176 0 00-.536.12.904.904 0 00-.376.336.8.8 0 000 .92.913.913 0 00.376.312c.167.081.35.122.536.12.188.002.374-.039.544-.12a.945.945 0 00.384-.32.8.8 0 00.136-.448.848.848 0 00-.136-.464.976.976 0 00-.384-.336z"
			}), a.a.createElement("path", {
				d: "M14.672 5.384l-4.056-4.056a3.688 3.688 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.69 3.69 0 000-5.232zM6.512 11.6H4.984V6.624L3.672 7.2V5.776l2.4-1.088h.448L6.512 11.6zm5.6-.904c-.234.32-.552.57-.92.72a3.264 3.264 0 01-2.552 0 2.185 2.185 0 01-.912-.72 1.736 1.736 0 01-.336-1.04c-.005-.335.09-.663.272-.944.184-.293.437-.538.736-.712a1.864 1.864 0 01-.688-1.472A1.736 1.736 0 018 5.536a1.88 1.88 0 01.8-.68 2.712 2.712 0 012.248 0c.325.148.602.383.8.68.192.29.292.63.288.976a1.903 1.903 0 01-.696 1.456c.3.172.556.413.744.704.186.283.283.614.28.952a1.68 1.68 0 01-.368 1.072h.016z"
			}));
			var l = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, a.a.createElement("path", {
					d: "M14.672 5.384l-4.056-4.056a3.689 3.689 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.689 3.689 0 000-5.232zM8.928 3.952L8.704 9.36H7.296l-.24-5.408h1.872zm-.04 7.648a.96.96 0 01-.368.368 1.05 1.05 0 01-.52.136A1.033 1.033 0 017.48 12a1 1 0 01-.376-.376 1.072 1.072 0 010-1.04.944.944 0 01.376-.376.96.96 0 01.52-.144.975.975 0 01.52.144.928.928 0 01.368.376 1.024 1.024 0 010 1.048V11.6z"
				})),
				u = i("./src/reddit/icons/svgs/Trash2/index.tsx"),
				p = i("./src/reddit/models/NotificationInbox/index.ts"),
				b = i("./src/reddit/components/NotificationUnit/index.m.less"),
				m = i.n(b);
			const f = e => {
					var t, i;
					const {
						isInAppNotification: o,
						post: {
							media: r,
							thumbnail: c,
							isNsfw: d,
							isSpoiler: l
						}
					} = e, u = (null === (i = null === (t = null == r ? void 0 : r.obfuscated) || void 0 === t ? void 0 : t.content) || void 0 === i ? void 0 : i.url) && c.url, p = null == c ? void 0 : c.url;
					return !p || d && !u || l && !u ? null : d ? a.a.createElement("span", {
						className: m.a.postEmbedBlurredThumbnailContainer
					}, a.a.createElement("span", {
						className: Object(s.a)(m.a.postEmbedNSFWThumbnailIndicator, {
							[m.a.inAppNotification]: o
						})
					}, "18+"), a.a.createElement("img", {
						alt: n.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: Object(s.a)(m.a.postEmbedBlurredThumbnail, {
							[m.a.inAppNotification]: o
						}),
						src: u
					})) : l ? a.a.createElement("img", {
						alt: n.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: Object(s.a)(m.a.postEmbedBlurredThumbnail, {
							[m.a.inAppNotification]: o
						}),
						src: u
					}) : a.a.createElement("img", {
						className: Object(s.a)(m.a.postEmbedThumbnail, {
							[m.a.inAppNotification]: o
						}),
						src: p
					})
				},
				x = e => {
					let {
						post: t,
						post: {
							commentCount: i = 0,
							isNsfw: o,
							isSpoiler: b,
							removedByCategory: x,
							score: N = 0,
							title: v
						},
						isUnread: E
					} = e;
					const I = x === p.c.Deleted,
						g = x && x !== p.c.Deleted,
						O = Object(s.a)(m.a.postEmbedContainer, {
							[m.a.unread]: E
						}),
						_ = Object(s.a)(m.a.postEmbedContent, {
							[m.a.deleted]: I || g
						});
					return a.a.createElement("span", {
						className: O
					}, a.a.createElement("span", {
						className: _
					}, a.a.createElement("span", null, a.a.createElement("span", {
						className: m.a.postEmbedTitleContainer
					}, o && a.a.createElement(d, {
						className: m.a.WarningIcon
					}), b && a.a.createElement(l, {
						className: m.a.WarningIcon
					}), a.a.createElement("p", {
						className: m.a.postEmbedTitle
					}, v)), a.a.createElement("span", {
						className: m.a.postEmbedMeta
					}, !I && !g && a.a.createElement(a.a.Fragment, null, a.a.createElement(r.b, {
						isScoreHidden: !1,
						score: N,
						useUpvotes: !0
					}), a.a.createElement(r.c, null), Object(r.d)(i)), I && a.a.createElement("span", {
						className: m.a.PostUnavailableInfo
					}, a.a.createElement(u.b, {
						className: m.a.StateIcon
					}), a.a.createElement("span", {
						className: m.a.Text
					}, n.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), g && a.a.createElement("span", {
						className: m.a.PostUnavailableInfo
					}, a.a.createElement(c, {
						className: m.a.StateIcon
					}), a.a.createElement("span", {
						className: m.a.Text
					}, n.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), a.a.createElement(f, {
						post: t
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/TopBar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return p
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/lib/classNames/index.ts"),
				s = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/timeAgo/index.ts"),
				c = i("./src/reddit/controls/MetaData/index.tsx"),
				d = i("./src/reddit/icons/fonts/index.tsx"),
				l = i("./src/reddit/components/NotificationUnit/index.m.less"),
				u = i.n(l);
			const p = e => {
				const {
					dropdownId: t,
					isHideNotifEligible: i,
					isInTooltip: n,
					isInAppNotification: l,
					isOverflowMenuOpen: p,
					isToggleLowUpdateFromSubredditEligible: b,
					isToggleNotificationUpdateEligible: m,
					isToggleUpdateFromSubredditEligible: f,
					sendInboxClickOverflow: x,
					sentAt: N,
					setActiveOverflowMenuId: v,
					title: E
				} = e, I = (i || m || f || b) && !l, g = Object(a.a)(u.a.menuButton, {
					[u.a.isOpen]: p
				}), O = Date.parse(N) / s.Sb;
				return o.a.createElement("span", {
					className: u.a.topBar
				}, o.a.createElement("span", {
					className: Object(a.a)(u.a.TitleWrapper, {
						[u.a.inAppNotification]: l
					})
				}, o.a.createElement("span", {
					className: Object(a.a)(u.a.title, {
						[u.a["m-tooltip"]]: n,
						[u.a.inAppNotification]: l
					})
				}, E), o.a.createElement(c.c, {
					className: Object(a.a)(u.a.Separator, {
						[u.a.inAppNotification]: l
					})
				}), o.a.createElement("span", {
					className: Object(a.a)(u.a.timeAgo, {
						[u.a.inAppNotification]: l
					})
				}, Object(r.a)(O, !0))), I && o.a.createElement("button", {
					"aria-expanded": p,
					"aria-haspopup": !0,
					className: g,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), p ? v && v("") : (x && x(), v && v && t && v(t))
					}
				}, o.a.createElement(d.a, {
					name: "overflow_horizontal",
					className: u.a.MenuIcon
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i.n(a),
				r = i("./node_modules/react/index.js"),
				c = i.n(r),
				d = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				u = i("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				p = i("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				b = i("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				m = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				x = i("./src/reddit/models/NotificationInbox/index.ts"),
				N = i("./src/reddit/selectors/experiments/inAppNotification.ts"),
				v = i("./node_modules/react-redux/es/index.js"),
				E = i("./src/reddit/actions/toaster.ts"),
				I = i("./src/reddit/models/Toast/index.ts"),
				g = i("./src/reddit/selectors/user.ts"),
				O = i("./src/reddit/components/NotificationUnit/index.m.less"),
				_ = i.n(O);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(n.a)({
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
				T = "",
				h = .5,
				A = e => {
					var t, i, n, s, O, A, y, S, U, k, M, j;
					const L = Object(f.a)(),
						D = Object(v.d)(),
						P = Object(v.e)(g.db),
						R = Object(v.e)(N.d),
						[H, V] = Object(r.useState)(!1),
						{
							activeOverflowMenuId: F,
							isInboxPostEmbedEnabled: B,
							isInAppNotification: K,
							isInTooltip: W,
							notification: z,
							shouldHideActionButton: Y,
							setActiveOverflowMenuId: Z,
							onItemClick: q
						} = e;
					if (!z) return null;
					const {
						avatar: G,
						body: $,
						context: Q,
						deeplinkUrl: J,
						isHideNotifEligible: X,
						isToggleLowUpdateFromSubredditEligible: ee,
						isToggleNotificationUpdateEligible: te,
						isToggleUpdateFromSubredditEligible: ie,
						icon: ne,
						id: oe,
						readAt: ae,
						sentAt: se,
						title: re
					} = z, ce = null == Q ? void 0 : Q.messageType, de = null === (i = null === (t = null == Q ? void 0 : Q.comment) || void 0 === t ? void 0 : t.parent) || void 0 === i ? void 0 : i.id, le = null === (n = null == Q ? void 0 : Q.post) || void 0 === n ? void 0 : n.id, ue = null == Q ? void 0 : Q.post, pe = null === (s = null == Q ? void 0 : Q.subreddit) || void 0 === s ? void 0 : s.id, be = null == Q ? void 0 : Q.isBodyHidden, me = null == Q ? void 0 : Q.isPostHidden, fe = !ae, xe = `notif-${W?"tooltip":""}-menu-${oe}`, Ne = xe === F, ve = Q.messageType === x.a.CommentReply, Ee = ve ? de : le, Ie = Object(d.a)(e.className, _.a.notificationItem, {
						[_.a.unread]: fe && !K,
						[_.a.isNightMode]: P,
						[_.a.inAppNotification]: K
					}), ge = {
						id: oe,
						isClicked: !!ae,
						isViewed: !0,
						type: ce
					}, Oe = Q.messageType === x.a.AwardReceived, _e = ce === x.a.LifecyclePostSuggestions, we = Oe ? null === (O = null == Q ? void 0 : Q.awarding) || void 0 === O ? void 0 : O.id : "", Ce = null === (y = null === (A = null == Q ? void 0 : Q.awarding) || void 0 === A ? void 0 : A.target) || void 0 === y ? void 0 : y.permalink, Te = null === (U = null === (S = null == Q ? void 0 : Q.awarding) || void 0 === S ? void 0 : S.award) || void 0 === U ? void 0 : U.id;
					let he = (null === (k = null == Q ? void 0 : Q.post) || void 0 === k ? void 0 : k.permalink) || J;
					Oe && Ce ? he = Ce : _e && J && (he = J);
					const Ae = null === (j = null === (M = null == Q ? void 0 : Q.awarding) || void 0 === M ? void 0 : M.awarder) || void 0 === j ? void 0 : j.isAcceptingChats,
						ye = e => {
							L(Object(m.m)({
								...ge,
								actionInfoType: e
							}))
						},
						Se = e => {
							L(Object(m.z)({
								...ge,
								actionInfoType: e
							}))
						},
						Ue = () => {
							e.markNotificationAsRead(oe, ce)
						},
						ke = e => {
							if (K) return L(Object(m.h)({
								...ge,
								...e
							}));
							L(Object(m.k)({
								...ge,
								...e
							}))
						},
						Me = c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, {
							avatar: G,
							iconType: ne,
							messageType: ce,
							isInAppNotification: K
						}), c.a.createElement("span", {
							className: _.a.contentContainer
						}, c.a.createElement(b.a, {
							dropdownId: xe,
							isHideNotifEligible: X,
							isInTooltip: W,
							isOverflowMenuOpen: Ne,
							isToggleNotificationUpdateEligible: te,
							isToggleUpdateFromSubredditEligible: ie,
							isToggleLowUpdateFromSubredditEligible: ee,
							sendInboxClickOverflow: () => L(Object(m.l)({
								...ge,
								awardId: Te
							})),
							sentAt: se,
							setActiveOverflowMenuId: Z,
							title: re,
							isInAppNotification: K
						}), B && ue && !me && !K && c.a.createElement(p.a, {
							isUnread: fe,
							post: ue
						}), (!B || B && !be) && c.a.createElement("span", {
							className: Object(d.a)(_.a.body, {
								[_.a.inAppNotification]: K
							})
						}, $), !Y && (Ae || Oe || ve || R && K) && c.a.createElement(C, {
							context: Q,
							notificationId: oe,
							isUnread: fe,
							isFullWidth: W,
							onEvent: ke,
							deeplinkUrl: he,
							isNightMode: P,
							isInAppNotification: K
						})), K && (null == Q ? void 0 : Q.post) ? c.a.createElement(p.b, {
							isInAppNotification: !0,
							post: Q.post
						}) : null),
						je = {
							className: Object(d.a)(_.a.link, {
								[_.a.inAppNotification]: K
							}),
							onClick: e => {
								(null == ue ? void 0 : ue.removedByCategory) ? (e.preventDefault(), D(Object(E.f)({
									kind: I.b.Error,
									text: a.fbt._("Sorry, this content is no longer available.", null, {
										hk: "3sVhIi"
									}),
									duration: E.a
								}))) : W && q && q(), ke({
									postId: le,
									subredditId: pe,
									awardId: Te,
									position: m.d.FIRST
								})
							},
							onMouseDown: Ue,
							onKeyDown: Ue
						};
					return c.a.createElement(c.a.Fragment, null, c.a.createElement("li", {
						className: Ie
					}, c.a.createElement("a", w({}, je, {
						href: he,
						target: "_blank",
						rel: "noopener noreferrer"
					}), Me)), K ? null : c.a.createElement(u.a, {
						decreaseSubUpdates: () => {
							const t = m.e.DecreaseSubredditUpdates;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(T), pe && e.decreaseSubredditNotifications && e.decreaseSubredditNotifications(pe, () => Se(t)), ye(t)
						},
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(T), e.disableNotificationUpdates && e.disableNotificationUpdates(Ee), ye(m.e.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(T), e.hideNotification && e.hideNotification(oe), ye(m.e.HideNotifications)
						},
						hideSubredditNotifications: () => {
							const t = m.e.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(T), e.hideSubredditNotifications && e.hideSubredditNotifications(pe, () => Se(t)), ye(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(T), e.blockAwarder && e.blockAwarder(we), ye(m.e.BlockAwarder)
						},
						isInTooltip: W,
						isHideNotifEligible: X,
						isOpen: Ne,
						isToggleLowUpdateFromSubredditEligible: ee,
						isToggleNotificationUpdateEligible: te,
						isToggleUpdateFromSubredditEligible: !(!ie || !pe),
						isBlockAwarderEligible: Oe,
						sendInboxViewOverflow: () => L(Object(m.x)(ge)),
						tooltipId: xe
					}), c.a.createElement(o.a, {
						onChange: e => {
							if (e.isIntersecting && !H) {
								if (K) return L(Object(m.t)({
									...ge
								}));
								L(Object(m.w)({
									...ge
								})), V(!0)
							}
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: h
					}, c.a.createElement("div", null)))
				};
			t.default = A
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/higherOrderComponents/asTooltip.tsx"),
				s = i("./src/reddit/constants/elementIds.ts"),
				r = i("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const i = Object(a.a)(e, t);
				class n extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(s.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(i, c({}, this.props, {
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
				return l
			})), i.d(t, "c", (function() {
				return u
			})), i.d(t, "b", (function() {
				return p
			})), i.d(t, "d", (function() {
				return b
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/lib/prettyPrintNumber/index.ts"),
				c = (i("./src/lib/timeAgo/index.ts"), i("./src/reddit/controls/MetaData/index.m.less")),
				d = i.n(c);
			const l = s.a.span("metaText", d.a),
				u = e => a.a.createElement(l, e, " · "),
				p = e => {
					let {
						isScoreHidden: t,
						score: i,
						useUpvotes: o,
						...s
					} = e;
					const c = Object(r.b)(i),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(i, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(i, "number", c)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, s, u)
				},
				b = e => a.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(r.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return n
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "a", (function() {
				return c
			})), i.d(t, "w", (function() {
				return p
			})), i.d(t, "t", (function() {
				return b
			})), i.d(t, "r", (function() {
				return m
			})), i.d(t, "s", (function() {
				return f
			})), i.d(t, "p", (function() {
				return x
			})), i.d(t, "k", (function() {
				return N
			})), i.d(t, "h", (function() {
				return v
			})), i.d(t, "u", (function() {
				return E
			})), i.d(t, "v", (function() {
				return I
			})), i.d(t, "y", (function() {
				return g
			})), i.d(t, "l", (function() {
				return O
			})), i.d(t, "x", (function() {
				return _
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "m", (function() {
				return C
			})), i.d(t, "z", (function() {
				return T
			})), i.d(t, "q", (function() {
				return h
			})), i.d(t, "o", (function() {
				return A
			})), i.d(t, "n", (function() {
				return y
			})), i.d(t, "j", (function() {
				return S
			})), i.d(t, "i", (function() {
				return U
			})), i.d(t, "g", (function() {
				return k
			}));
			var n, o, a, s, r, c, d = i("./src/reddit/constants/tracking.ts"),
				l = i("./src/reddit/selectors/telemetry.ts"),
				u = i("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(n || (n = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(o || (o = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(a || (a = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(s || (s = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(r || (r = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const p = e => {
					let {
						id: t,
						isClicked: i,
						isViewed: n,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: i,
							isViewed: n
						},
						notification: {
							type: o
						}
					})
				},
				b = e => {
					let {
						id: t,
						isClicked: i,
						isViewed: n,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: i,
							isViewed: n
						},
						notification: {
							type: o
						}
					})
				},
				m = () => e => ({
					...l.n(e),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				f = e => {
					let {
						id: t,
						isClicked: i,
						isViewed: n,
						type: o,
						awardId: a
					} = e;
					return e => {
						Object(u.a)({
							...l.n(e),
							action: "receive",
							noun: "inbox_notification",
							source: s.Inbox,
							inbox: {
								id: t,
								isClicked: i,
								isViewed: n
							},
							notification: {
								type: o
							},
							goldPurchase: {
								awardId: a
							}
						})
					}
				},
				x = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: t
						}
					})
				},
				N = e => {
					let {
						id: t,
						isClicked: i,
						isViewed: n,
						type: o,
						awardId: a,
						position: s,
						postId: r,
						subredditId: c
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: i,
							isViewed: n
						},
						notification: {
							type: o
						},
						goldPurchase: {
							awardId: a
						},
						actionInfo: {
							position: s
						},
						subreddit: c ? {
							id: c
						} : null,
						post: r ? {
							id: r
						} : null
					})
				},
				v = e => {
					let {
						id: t,
						isClicked: i,
						isViewed: n,
						type: o,
						awardId: a,
						position: s,
						postId: r,
						subredditId: c
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: i,
							isViewed: n
						},
						notification: {
							type: o
						},
						goldPurchase: {
							awardId: a
						},
						actionInfo: {
							position: s
						},
						subreddit: c ? {
							id: c
						} : null,
						post: r ? {
							id: r
						} : null
					})
				},
				E = e => {
					let {
						badgeCount: t,
						tab: i
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: t,
							tab: i
						}
					})
				},
				I = e => {
					let {
						badgeCount: t,
						tab: i
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "mini_inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: t,
							tab: n.Activity
						}
					})
				},
				g = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: s.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				O = e => {
					let {
						id: t,
						isClicked: i,
						isViewed: n,
						type: o,
						awardId: a
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: t,
							isClicked: i,
							isViewed: n
						},
						notification: {
							type: o
						},
						goldPurchase: {
							awardId: a
						}
					})
				},
				_ = e => {
					let {
						id: t,
						isClicked: i,
						isViewed: n,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: t,
							isClicked: i,
							isViewed: n
						},
						notification: {
							type: o
						}
					})
				};
			var w;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(w || (w = {}));
			const C = e => {
					let {
						actionInfoType: t,
						id: i,
						isClicked: n,
						isViewed: o,
						type: a
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: i,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: a
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				T = e => {
					let {
						actionInfoType: t,
						id: i,
						isClicked: n,
						isViewed: o,
						type: a
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: i,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: a
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				h = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: s.Inbox,
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				A = e => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: s.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				y = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: s.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: a.MiniInbox
					}
				}),
				S = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "messages",
					source: s.Inbox
				}),
				U = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: s.Inbox,
						actionInfo: t ? {
							...l.d(e),
							pageType: a.MiniInbox
						} : {}
					})
				},
				k = (e, t) => i => ({
					...l.n(i),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: s.Inbox,
					actionInfo: {
						...l.d(i),
						pageType: e,
						type: t
					}
				})
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, i) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = i.n(s);
			const c = e => o.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "d", (function() {
				return c
			}));
			var n, o, a, s, r = i("./src/reddit/models/FeedElement/index.ts");

			function c(e) {
				return e.__typename === r.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
			}(n || (n = {})),
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
		"./src/reddit/selectors/experiments/inAppNotification.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return r
			})), i.d(t, "c", (function() {
				return c
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			}));
			var n = i("./src/reddit/constants/experiments.ts"),
				o = i("./src/reddit/helpers/chooseVariant/index.ts"),
				a = i("./src/reddit/selectors/experiments/index.ts"),
				s = i("./src/reddit/selectors/experiments/utils.ts");
			const r = e => Object(o.c)(e, {
					experimentName: n.Ub,
					experimentEligibilitySelector: a.e
				}) === n.fb.topOfFeedWithCTAs,
				c = e => (e => Object(o.c)(e, {
					experimentName: n.Ub,
					experimentEligibilitySelector: a.e
				}) === n.fb.topOfFeedNoCTAs)(e) || r(e),
				d = e => Object(o.c)(e, {
					experimentName: n.Ub,
					experimentEligibilitySelector: a.e
				}) === n.fb.floatInFeed,
				l = e => {
					const t = Object(o.c)(e, {
						experimentName: n.Ub,
						experimentEligibilitySelector: a.e
					});
					return Object(s.a)(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.8f2831233b11910e00f1.js.map
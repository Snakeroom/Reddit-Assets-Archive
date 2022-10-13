// https://www.redditstatic.com/desktop2x/NotificationUnit.65e9ea9cf6c8e4e3ac30.js
// Retrieved at 10/13/2022, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return f
			}));
			var n = i("./src/config.ts"),
				a = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/constants/icons.ts"),
				c = i("./src/reddit/models/NotificationInbox/index.ts");
			const d = {
				[c.b.Award]: l.a.award,
				[c.b.Chat]: l.a.chat,
				[c.b.Comment]: l.a.comment,
				[c.b.Heart]: l.a.heart,
				[c.b.Live]: l.a.video_live,
				[c.b.Lore]: l.a.topic_reading_fill,
				[c.b.NotifyAll]: l.a.notification_frequent_fill,
				[c.b.Redditor]: l.a.user,
				[c.b.Reply]: l.a.comment,
				[c.b.SortRising]: l.a.rising,
				[c.b.SortTop]: l.a.top,
				[c.b.Trophy]: l.a.trophy,
				[c.b.Upvote]: l.a.upvote
			};
			var p = i("./src/reddit/icons/fonts/index.tsx"),
				m = i("./src/reddit/components/NotificationUnit/index.m.less"),
				u = i.n(m);
			const b = `${n.a.assetPath}/img/cake_day.png`,
				f = e => {
					const {
						avatar: t,
						iconType: i,
						messageType: n
					} = e, o = d[i] || l.a.notification_fill, m = n === c.a.CakeDay, f = t && t.isNsfw, v = t && t.url;
					return s.a.createElement("span", {
						className: u.a.avatarContainer
					}, ((e, t, i, n) => t ? s.a.createElement("span", {
						className: Object(r.a)(u.a.nsfwAvatar, {
							[u.a.inAppNotification]: n
						})
					}, "18+") : e ? s.a.createElement("img", {
						alt: a.fbt._("Slice of cake for cake day", null, {
							hk: "1E8fjv"
						}),
						className: u.a.avatar,
						src: b
					}) : s.a.createElement("img", {
						className: Object(r.a)(u.a.avatar, {
							[u.a.inAppNotification]: n
						}),
						src: i || ""
					}))(m, f, v, e.isInAppNotification), s.a.createElement("span", {
						className: Object(r.a)(u.a.notificationIconContainer, {
							[u.a.inAppNotification]: e.isInAppNotification
						})
					}, s.a.createElement(p.a, {
						name: o,
						isFilled: !0,
						className: u.a.NotifIcon
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/OverflowMenu.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return N
			}));
			var n, a = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				r = i("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = i("./src/higherOrderComponents/asTooltip.tsx"),
				c = i("./src/lib/lessComponent.tsx"),
				d = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = i("./src/reddit/controls/Dropdown/index.tsx"),
				m = i("./src/reddit/components/NotificationUnit/index.m.less"),
				u = i.n(m);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder", e.DecreaseSubredditUpdates = "DecreaseSubredditUpdates"
			}(n || (n = {}));
			const b = c.a.wrapped(p.a, "StyledDropdown", u.a),
				f = Object(l.a)(b),
				v = Object(d.a)(b, [r.a.Click]);
			f.displayName = "UnawareDropdown", v.displayName = "AwareDropdown";
			const N = e => {
				const {
					decreaseSubUpdates: t,
					disableNotificationUpdates: i,
					hideNotification: r,
					blockAwarder: l,
					isInTooltip: c,
					isHideNotifEligible: d,
					isOpen: p,
					isToggleLowUpdateFromSubredditEligible: m,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: N,
					isBlockAwarderEligible: g,
					hideSubredditNotifications: x,
					sendInboxViewOverflow: h,
					tooltipId: E
				} = e;
				Object(o.useEffect)(() => {
					p && h()
				}, [p]);
				const w = e => {
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
									handler: x
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
							handler: c,
							text: d
						} = o;
						return s.a.createElement("button", {
							className: u.a.overflowMenuOption,
							onClick: c,
							type: "button"
						}, d)
					},
					O = c ? v : f;
				return s.a.createElement(O, {
					id: E,
					isOverlayOff: !0,
					isOpen: p,
					tooltipId: E,
					tooltipPosition: ["right", "top"],
					isFixed: !0
				}, s.a.createElement("div", {
					className: u.a.overflowMenuContainer
				}, d && w(n.HideNotif), m && w(n.DecreaseSubredditUpdates), N && w(n.HideSubUpdates), b && w(n.HideNotifUpdate), g && w(n.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return f
			})), i.d(t, "a", (function() {
				return v
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				s = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/controls/MetaData/index.tsx");
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
			var d = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, o.a.createElement("path", {
					d: "M14.672 5.384l-4.056-4.056a3.689 3.689 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.689 3.689 0 000-5.232zM8.928 3.952L8.704 9.36H7.296l-.24-5.408h1.872zm-.04 7.648a.96.96 0 01-.368.368 1.05 1.05 0 01-.52.136A1.033 1.033 0 017.48 12a1 1 0 01-.376-.376 1.072 1.072 0 010-1.04.944.944 0 01.376-.376.96.96 0 01.52-.144.975.975 0 01.52.144.928.928 0 01.368.376 1.024 1.024 0 010 1.048V11.6z"
				})),
				p = i("./src/reddit/icons/svgs/Trash2/index.tsx"),
				m = i("./src/reddit/models/NotificationInbox/index.ts"),
				u = i("./src/reddit/components/NotificationUnit/index.m.less"),
				b = i.n(u);
			const f = e => {
					var t, i;
					const {
						isInAppNotification: a,
						post: {
							media: r,
							thumbnail: l,
							isNsfw: c,
							isSpoiler: d
						}
					} = e, p = (null === (i = null === (t = null == r ? void 0 : r.obfuscated) || void 0 === t ? void 0 : t.content) || void 0 === i ? void 0 : i.url) && l.url, m = null == l ? void 0 : l.url;
					return !m || c && !p || d && !p ? null : c ? o.a.createElement("span", {
						className: b.a.postEmbedBlurredThumbnailContainer
					}, o.a.createElement("span", {
						className: Object(s.a)(b.a.postEmbedNSFWThumbnailIndicator, {
							[b.a.inAppNotification]: a
						})
					}, "18+"), o.a.createElement("img", {
						alt: n.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: Object(s.a)(b.a.postEmbedBlurredThumbnail, {
							[b.a.inAppNotification]: a
						}),
						src: p
					})) : d ? o.a.createElement("img", {
						alt: n.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: Object(s.a)(b.a.postEmbedBlurredThumbnail, {
							[b.a.inAppNotification]: a
						}),
						src: p
					}) : o.a.createElement("img", {
						className: Object(s.a)(b.a.postEmbedThumbnail, {
							[b.a.inAppNotification]: a
						}),
						src: m
					})
				},
				v = e => {
					let {
						post: t,
						post: {
							commentCount: i = 0,
							isNsfw: a,
							isSpoiler: u,
							removedByCategory: v,
							score: N = 0,
							title: g
						},
						isUnread: x
					} = e;
					const h = v === m.c.Deleted,
						E = v && v !== m.c.Deleted,
						w = Object(s.a)(b.a.postEmbedContainer, {
							[b.a.unread]: x
						}),
						O = Object(s.a)(b.a.postEmbedContent, {
							[b.a.deleted]: h || E
						});
					return o.a.createElement("span", {
						className: w
					}, o.a.createElement("span", {
						className: O
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: b.a.postEmbedTitleContainer
					}, a && o.a.createElement(c, {
						className: b.a.WarningIcon
					}), u && o.a.createElement(d, {
						className: b.a.WarningIcon
					}), o.a.createElement("p", {
						className: b.a.postEmbedTitle
					}, g)), o.a.createElement("span", {
						className: b.a.postEmbedMeta
					}, !h && !E && o.a.createElement(o.a.Fragment, null, o.a.createElement(r.b, {
						isScoreHidden: !1,
						score: N,
						useUpvotes: !0
					}), o.a.createElement(r.c, null), Object(r.d)(i)), h && o.a.createElement("span", {
						className: b.a.PostUnavailableInfo
					}, o.a.createElement(p.b, {
						className: b.a.StateIcon
					}), o.a.createElement("span", {
						className: b.a.Text
					}, n.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), E && o.a.createElement("span", {
						className: b.a.PostUnavailableInfo
					}, o.a.createElement(l, {
						className: b.a.StateIcon
					}), o.a.createElement("span", {
						className: b.a.Text
					}, n.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), o.a.createElement(f, {
						post: t
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/TopBar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return m
			}));
			var n = i("./node_modules/react/index.js"),
				a = i.n(n),
				o = i("./src/lib/classNames/index.ts"),
				s = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/timeAgo/index.ts"),
				l = i("./src/reddit/controls/MetaData/index.tsx"),
				c = i("./src/reddit/icons/fonts/index.tsx"),
				d = i("./src/reddit/components/NotificationUnit/index.m.less"),
				p = i.n(d);
			const m = e => {
				const {
					dropdownId: t,
					isHideNotifEligible: i,
					isInTooltip: n,
					isInAppNotification: d,
					isOverflowMenuOpen: m,
					isToggleLowUpdateFromSubredditEligible: u,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: f,
					sendInboxClickOverflow: v,
					sentAt: N,
					setActiveOverflowMenuId: g,
					title: x
				} = e, h = (i || b || f || u) && !d, E = Object(o.a)(p.a.menuButton, {
					[p.a.isOpen]: m
				}), w = Date.parse(N) / s.Xb;
				return a.a.createElement("span", {
					className: p.a.topBar
				}, a.a.createElement("span", {
					className: Object(o.a)(p.a.TitleWrapper, {
						[p.a.inAppNotification]: d
					})
				}, a.a.createElement("span", {
					className: Object(o.a)(p.a.title, {
						[p.a["m-tooltip"]]: n,
						[p.a.inAppNotification]: d
					})
				}, x), a.a.createElement(l.c, {
					className: Object(o.a)(p.a.Separator, {
						[p.a.inAppNotification]: d
					})
				}), a.a.createElement("span", {
					className: Object(o.a)(p.a.timeAgo, {
						[p.a.inAppNotification]: d
					})
				}, Object(r.a)(w, !0))), h && a.a.createElement("button", {
					"aria-expanded": m,
					"aria-haspopup": !0,
					className: E,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), m ? g && g("") : (v && v(), g && g && t && g(t))
					}
				}, a.a.createElement(c.a, {
					name: "overflow_horizontal",
					className: p.a.MenuIcon
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i.n(o),
				r = i("./node_modules/react/index.js"),
				l = i.n(r),
				c = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				p = i("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				m = i("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				u = i("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				v = i("./src/reddit/models/NotificationInbox/index.ts"),
				N = i("./src/reddit/selectors/experiments/inAppNotification.ts"),
				g = i("./node_modules/react-redux/es/index.js"),
				x = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/models/Toast/index.ts"),
				E = i("./src/reddit/selectors/user.ts"),
				w = i("./src/reddit/components/NotificationUnit/index.m.less"),
				O = i.n(w);

			function A() {
				return (A = Object.assign || function(e) {
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
				j = "",
				T = .5,
				U = e => {
					var t, i, n, s, w, U, _, y, S, k, M, H;
					const C = Object(f.a)(),
						D = Object(g.d)(),
						F = Object(g.e)(E.db),
						B = Object(g.e)(N.d),
						[P, L] = Object(r.useState)(!1),
						{
							activeOverflowMenuId: V,
							isInboxPostEmbedEnabled: z,
							isInAppNotification: R,
							isInTooltip: Z,
							notification: W,
							shouldHideActionButton: X,
							setActiveOverflowMenuId: q,
							onItemClick: K
						} = e;
					if (!W) return null;
					const {
						avatar: $,
						body: J,
						context: Q,
						deeplinkUrl: G,
						isHideNotifEligible: Y,
						isToggleLowUpdateFromSubredditEligible: ee,
						isToggleNotificationUpdateEligible: te,
						isToggleUpdateFromSubredditEligible: ie,
						icon: ne,
						id: ae,
						readAt: oe,
						sentAt: se,
						title: re
					} = W, le = null == Q ? void 0 : Q.messageType, ce = null === (i = null === (t = null == Q ? void 0 : Q.comment) || void 0 === t ? void 0 : t.parent) || void 0 === i ? void 0 : i.id, de = null === (n = null == Q ? void 0 : Q.post) || void 0 === n ? void 0 : n.id, pe = null == Q ? void 0 : Q.post, me = null === (s = null == Q ? void 0 : Q.subreddit) || void 0 === s ? void 0 : s.id, ue = null == Q ? void 0 : Q.isBodyHidden, be = null == Q ? void 0 : Q.isPostHidden, fe = !oe, ve = `notif-${Z?"tooltip":""}-menu-${ae}`, Ne = ve === V, ge = Q.messageType === v.a.CommentReply, xe = ge ? ce : de, he = Object(c.a)(e.className, O.a.notificationItem, {
						[O.a.unread]: fe && !R,
						[O.a.isNightMode]: F,
						[O.a.inAppNotification]: R
					}), Ee = {
						id: ae,
						isClicked: !!oe,
						isViewed: !0,
						type: le
					}, we = Q.messageType === v.a.AwardReceived, Oe = le === v.a.LifecyclePostSuggestions, Ae = we ? null === (w = null == Q ? void 0 : Q.awarding) || void 0 === w ? void 0 : w.id : "", Ie = null === (_ = null === (U = null == Q ? void 0 : Q.awarding) || void 0 === U ? void 0 : U.target) || void 0 === _ ? void 0 : _.permalink, je = null === (S = null === (y = null == Q ? void 0 : Q.awarding) || void 0 === y ? void 0 : y.award) || void 0 === S ? void 0 : S.id;
					let Te = (null === (k = null == Q ? void 0 : Q.post) || void 0 === k ? void 0 : k.permalink) || G;
					we && Ie ? Te = Ie : Oe && G && (Te = G);
					const Ue = null === (H = null === (M = null == Q ? void 0 : Q.awarding) || void 0 === M ? void 0 : M.awarder) || void 0 === H ? void 0 : H.isAcceptingChats,
						_e = e => {
							C(Object(b.l)({
								...Ee,
								actionInfoType: e
							}))
						},
						ye = e => {
							C(Object(b.E)({
								...Ee,
								actionInfoType: e
							}))
						},
						Se = () => {
							e.markNotificationAsRead(ae, le)
						},
						ke = e => {
							if (R) return C(Object(b.g)({
								...Ee,
								...e
							}));
							C(Object(b.j)({
								...Ee,
								...e
							}))
						},
						Me = l.a.createElement(l.a.Fragment, null, l.a.createElement(d.a, {
							avatar: $,
							iconType: ne,
							messageType: le,
							isInAppNotification: R
						}), l.a.createElement("span", {
							className: O.a.contentContainer
						}, l.a.createElement(u.a, {
							dropdownId: ve,
							isHideNotifEligible: Y,
							isInTooltip: Z,
							isOverflowMenuOpen: Ne,
							isToggleNotificationUpdateEligible: te,
							isToggleUpdateFromSubredditEligible: ie,
							isToggleLowUpdateFromSubredditEligible: ee,
							sendInboxClickOverflow: () => C(Object(b.k)({
								...Ee,
								awardId: je
							})),
							sentAt: se,
							setActiveOverflowMenuId: q,
							title: re,
							isInAppNotification: R
						}), z && pe && !be && !R && l.a.createElement(m.a, {
							isUnread: fe,
							post: pe
						}), (!z || z && !ue) && l.a.createElement("span", {
							className: Object(c.a)(O.a.body, {
								[O.a.inAppNotification]: R
							})
						}, J), !X && (Ue || we || ge || B && R) && l.a.createElement(I, {
							context: Q,
							notificationId: ae,
							isUnread: fe,
							isFullWidth: Z,
							onEvent: ke,
							deeplinkUrl: Te,
							isNightMode: F,
							isInAppNotification: R
						})), R && (null == Q ? void 0 : Q.post) ? l.a.createElement(m.b, {
							isInAppNotification: !0,
							post: Q.post
						}) : null),
						He = {
							className: Object(c.a)(O.a.link, {
								[O.a.inAppNotification]: R
							}),
							onClick: e => {
								(null == pe ? void 0 : pe.removedByCategory) ? (e.preventDefault(), D(Object(x.f)({
									kind: h.b.Error,
									text: o.fbt._("Sorry, this content is no longer available.", null, {
										hk: "3sVhIi"
									}),
									duration: x.a
								}))) : Z && K && K(), ke({
									postId: de,
									subredditId: me,
									awardId: je,
									position: b.d.FIRST
								})
							},
							onMouseDown: Se,
							onKeyDown: Se
						};
					return l.a.createElement(l.a.Fragment, null, l.a.createElement("li", {
						className: he
					}, l.a.createElement("a", A({}, He, {
						href: Te,
						target: "_blank",
						rel: "noopener noreferrer"
					}), Me)), R ? null : l.a.createElement(p.a, {
						decreaseSubUpdates: () => {
							const t = b.e.DecreaseSubredditUpdates;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(j), me && e.decreaseSubredditNotifications && e.decreaseSubredditNotifications(me, () => ye(t)), _e(t)
						},
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(j), e.disableNotificationUpdates && e.disableNotificationUpdates(xe), _e(b.e.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(j), e.hideNotification && e.hideNotification(ae), _e(b.e.HideNotifications)
						},
						hideSubredditNotifications: () => {
							const t = b.e.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(j), e.hideSubredditNotifications && e.hideSubredditNotifications(me, () => ye(t)), _e(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(j), e.blockAwarder && e.blockAwarder(Ae), _e(b.e.BlockAwarder)
						},
						isInTooltip: Z,
						isHideNotifEligible: Y,
						isOpen: Ne,
						isToggleLowUpdateFromSubredditEligible: ee,
						isToggleNotificationUpdateEligible: te,
						isToggleUpdateFromSubredditEligible: !(!ie || !me),
						isBlockAwarderEligible: we,
						sendInboxViewOverflow: () => C(Object(b.z)(Ee)),
						tooltipId: ve
					}), l.a.createElement(a.a, {
						onChange: e => {
							if (e.isIntersecting && !P) {
								if (R) return C(Object(b.v)({
									...Ee
								}));
								C(Object(b.y)({
									...Ee
								})), L(!0)
							}
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: T
					}, l.a.createElement("div", null)))
				};
			t.default = U
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
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

			function c(e, t) {
				const i = Object(o.a)(e, t);
				class n extends a.a.PureComponent {
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
						return a.a.createElement(i, l({}, this.props, {
							container: this.state.container || this.props.container,
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
				return d
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "b", (function() {
				return m
			})), i.d(t, "d", (function() {
				return u
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/lib/prettyPrintNumber/index.ts"),
				l = (i("./src/lib/timeAgo/index.ts"), i("./src/reddit/controls/MetaData/index.m.less")),
				c = i.n(l);
			const d = s.a.span("metaText", c.a),
				p = e => o.a.createElement(d, e, " · "),
				m = e => {
					let {
						isScoreHidden: t,
						score: i,
						useUpvotes: a,
						...s
					} = e;
					const l = Object(r.b)(i),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(i, "number", l)], {
							hk: "2L3T21"
						}),
						p = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(i, "number", l)], {
							hk: "gf67v"
						});
					return o.a.createElement(d, s, p)
				},
				u = e => o.a.createElement(d, null, n.fbt._({
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
		"./src/reddit/selectors/experiments/inAppNotification.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return r
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "a", (function() {
				return d
			}));
			var n = i("./src/reddit/constants/experiments.ts"),
				a = i("./src/reddit/helpers/chooseVariant/index.ts"),
				o = i("./src/reddit/selectors/experiments/index.ts"),
				s = i("./src/reddit/selectors/experiments/utils.ts");
			const r = e => Object(a.c)(e, {
					experimentName: n.Xb,
					experimentEligibilitySelector: o.e
				}) === n.fb.topOfFeedWithCTAs,
				l = e => (e => Object(a.c)(e, {
					experimentName: n.Xb,
					experimentEligibilitySelector: o.e
				}) === n.fb.topOfFeedNoCTAs)(e) || r(e),
				c = e => Object(a.c)(e, {
					experimentName: n.Xb,
					experimentEligibilitySelector: o.e
				}) === n.fb.floatInFeed,
				d = e => {
					const t = Object(a.c)(e, {
						experimentName: n.Xb,
						experimentEligibilitySelector: o.e
					});
					return Object(s.a)(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.65e9ea9cf6c8e4e3ac30.js.map
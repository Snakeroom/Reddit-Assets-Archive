// https://www.redditstatic.com/desktop2x/NotificationUnit.efac6fe0bb5109c5968b.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationUnit"], {
		"./src/reddit/components/NotificationUnit/Avatar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return f
			}));
			var a = i("./src/config.ts"),
				n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/constants/icons.ts"),
				d = i("./src/reddit/models/NotificationInbox/index.ts");
			const c = {
				[d.b.Award]: l.a.award,
				[d.b.Chat]: l.a.chat,
				[d.b.Comment]: l.a.comment,
				[d.b.Heart]: l.a.heart,
				[d.b.Lore]: l.a.topic_reading_fill,
				[d.b.NotifyAll]: l.a.notification_frequent_fill,
				[d.b.Redditor]: l.a.user,
				[d.b.Reply]: l.a.comment,
				[d.b.SortRising]: l.a.rising,
				[d.b.SortTop]: l.a.top,
				[d.b.Trophy]: l.a.trophy,
				[d.b.Upvote]: l.a.upvote
			};
			var m = i("./src/reddit/icons/fonts/index.tsx"),
				p = i("./src/reddit/components/NotificationUnit/index.m.less"),
				u = i.n(p);
			const b = `${a.a.assetPath}/img/cake_day.png`,
				f = e => {
					const {
						avatar: t,
						iconType: i,
						messageType: a
					} = e, o = c[i] || l.a.notification_fill, p = a === d.a.CakeDay, f = t && t.isNsfw, v = t && t.url;
					return s.a.createElement("span", {
						className: u.a.avatarContainer
					}, ((e, t, i, a) => t ? s.a.createElement("span", {
						className: Object(r.a)(u.a.nsfwAvatar, {
							[u.a.inAppNotification]: a
						})
					}, "18+") : e ? s.a.createElement("img", {
						alt: n.fbt._("Slice of cake for cake day", null, {
							hk: "1E8fjv"
						}),
						className: u.a.avatar,
						src: b
					}) : s.a.createElement("img", {
						className: Object(r.a)(u.a.avatar, {
							[u.a.inAppNotification]: a
						}),
						src: i || ""
					}))(p, f, v, e.isInAppNotification), s.a.createElement("span", {
						className: Object(r.a)(u.a.notificationIconContainer, {
							[u.a.inAppNotification]: e.isInAppNotification
						})
					}, s.a.createElement(m.a, {
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
			var a, n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				r = i("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = i("./src/higherOrderComponents/asTooltip.tsx"),
				d = i("./src/lib/lessComponent.tsx"),
				c = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.tsx"),
				p = i("./src/reddit/components/NotificationUnit/index.m.less"),
				u = i.n(p);
			! function(e) {
				e.HideNotif = "HideNotif", e.HideNotifUpdate = "HideNotifUpdate", e.HideSubUpdates = "HideSubUpdates", e.HideAwarder = "HideAwarder", e.DecreaseSubredditUpdates = "DecreaseSubredditUpdates"
			}(a || (a = {}));
			const b = d.a.wrapped(m.a, "StyledDropdown", u.a),
				f = Object(l.a)(b),
				v = Object(c.a)(b, [r.a.Click]);
			f.displayName = "UnawareDropdown", v.displayName = "AwareDropdown";
			const N = e => {
				const {
					decreaseSubUpdates: t,
					disableNotificationUpdates: i,
					hideNotification: r,
					blockAwarder: l,
					isInTooltip: d,
					isHideNotifEligible: c,
					isOpen: m,
					isToggleLowUpdateFromSubredditEligible: p,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: N,
					isBlockAwarderEligible: g,
					hideSubredditNotifications: h,
					sendInboxViewOverflow: x,
					tooltipId: E
				} = e;
				Object(o.useEffect)(() => {
					m && x()
				}, [m]);
				const w = e => {
						let o;
						switch (e) {
							case a.HideNotif:
								o = {
									text: n.fbt._("Hide this notification", null, {
										hk: "4F7TDr"
									}),
									handler: r
								};
								break;
							case a.HideSubUpdates:
								o = {
									text: n.fbt._("Disable updates from this community", null, {
										hk: "2mvqrp"
									}),
									handler: h
								};
								break;
							case a.HideNotifUpdate:
								o = {
									text: n.fbt._("Don't get updates on this", null, {
										hk: "L7aUS"
									}),
									handler: i
								};
								break;
							case a.HideAwarder:
								o = {
									text: n.fbt._("Block awards from this user", null, {
										hk: "47U4V4"
									}),
									handler: l
								};
								break;
							case a.DecreaseSubredditUpdates:
								o = {
									text: n.fbt._("See less from this community", null, {
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
							className: u.a.overflowMenuOption,
							onClick: d,
							type: "button"
						}, c)
					},
					O = d ? v : f;
				return s.a.createElement(O, {
					id: E,
					isOverlayOff: !0,
					isOpen: m,
					tooltipId: E,
					tooltipPosition: ["right", "top"],
					isFixed: !0
				}, s.a.createElement("div", {
					className: u.a.overflowMenuContainer
				}, c && w(a.HideNotif), p && w(a.DecreaseSubredditUpdates), N && w(a.HideSubUpdates), b && w(a.HideNotifUpdate), g && w(a.HideAwarder)))
			}
		},
		"./src/reddit/components/NotificationUnit/PostEmbed.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return v
			}));
			var a = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				o = i.n(n),
				s = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/controls/MetaData/index.tsx");
			var l = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM1.625,10A8.327,8.327,0,0,1,3.66,4.544l11.8,11.8A8.363,8.363,0,0,1,1.625,10ZM16.34,15.456,4.544,3.66a8.363,8.363,0,0,1,11.8,11.8Z"
			}));
			var d = e => o.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("path", {
				d: "M9.432 7.368a.856.856 0 00.472.128.912.912 0 00.496-.12.8.8 0 00.32-.304.8.8 0 000-.856.8.8 0 00-.32-.304.904.904 0 00-.464-.112.936.936 0 00-.44.104.8.8 0 00-.328.296.744.744 0 00-.128.432.8.8 0 00.112.424.8.8 0 00.28.312zM10.448 8.8a1.208 1.208 0 00-.544-.12 1.176 1.176 0 00-.536.12.904.904 0 00-.376.336.8.8 0 000 .92.913.913 0 00.376.312c.167.081.35.122.536.12.188.002.374-.039.544-.12a.945.945 0 00.384-.32.8.8 0 00.136-.448.848.848 0 00-.136-.464.976.976 0 00-.384-.336z"
			}), o.a.createElement("path", {
				d: "M14.672 5.384l-4.056-4.056a3.688 3.688 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.69 3.69 0 000-5.232zM6.512 11.6H4.984V6.624L3.672 7.2V5.776l2.4-1.088h.448L6.512 11.6zm5.6-.904c-.234.32-.552.57-.92.72a3.264 3.264 0 01-2.552 0 2.185 2.185 0 01-.912-.72 1.736 1.736 0 01-.336-1.04c-.005-.335.09-.663.272-.944.184-.293.437-.538.736-.712a1.864 1.864 0 01-.688-1.472A1.736 1.736 0 018 5.536a1.88 1.88 0 01.8-.68 2.712 2.712 0 012.248 0c.325.148.602.383.8.68.192.29.292.63.288.976a1.903 1.903 0 01-.696 1.456c.3.172.556.413.744.704.186.283.283.614.28.952a1.68 1.68 0 01-.368 1.072h.016z"
			}));
			var c = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, o.a.createElement("path", {
					d: "M14.672 5.384l-4.056-4.056a3.689 3.689 0 00-5.232 0L1.328 5.384a3.688 3.688 0 000 5.232l4.056 4.056a3.688 3.688 0 005.232 0l4.056-4.056a3.689 3.689 0 000-5.232zM8.928 3.952L8.704 9.36H7.296l-.24-5.408h1.872zm-.04 7.648a.96.96 0 01-.368.368 1.05 1.05 0 01-.52.136A1.033 1.033 0 017.48 12a1 1 0 01-.376-.376 1.072 1.072 0 010-1.04.944.944 0 01.376-.376.96.96 0 01.52-.144.975.975 0 01.52.144.928.928 0 01.368.376 1.024 1.024 0 010 1.048V11.6z"
				})),
				m = i("./src/reddit/icons/svgs/Trash2/index.tsx"),
				p = i("./src/reddit/models/NotificationInbox/index.ts"),
				u = i("./src/reddit/components/NotificationUnit/index.m.less"),
				b = i.n(u);
			const f = e => {
					var t, i;
					const {
						isInAppNotification: n,
						post: {
							media: r,
							thumbnail: l,
							isNsfw: d,
							isSpoiler: c
						}
					} = e, m = (null === (i = null === (t = null == r ? void 0 : r.obfuscated) || void 0 === t ? void 0 : t.content) || void 0 === i ? void 0 : i.url) && l.url, p = null == l ? void 0 : l.url;
					return !p || d && !m || c && !m ? null : d ? o.a.createElement("span", {
						className: b.a.postEmbedBlurredThumbnailContainer
					}, o.a.createElement("span", {
						className: Object(s.a)(b.a.postEmbedNSFWThumbnailIndicator, {
							[b.a.inAppNotification]: n
						})
					}, "18+"), o.a.createElement("img", {
						alt: a.fbt._("NSFW image", null, {
							hk: "2abdii"
						}),
						className: Object(s.a)(b.a.postEmbedBlurredThumbnail, {
							[b.a.inAppNotification]: n
						}),
						src: m
					})) : c ? o.a.createElement("img", {
						alt: a.fbt._("Spoiler image", null, {
							hk: "4Br0cw"
						}),
						className: Object(s.a)(b.a.postEmbedBlurredThumbnail, {
							[b.a.inAppNotification]: n
						}),
						src: m
					}) : o.a.createElement("img", {
						className: Object(s.a)(b.a.postEmbedThumbnail, {
							[b.a.inAppNotification]: n
						}),
						src: p
					})
				},
				v = e => {
					let {
						post: t,
						post: {
							commentCount: i = 0,
							isNsfw: n,
							isSpoiler: u,
							removedByCategory: v,
							score: N = 0,
							title: g
						},
						isUnread: h
					} = e;
					const x = v === p.c.Deleted,
						E = v && v !== p.c.Deleted,
						w = Object(s.a)(b.a.postEmbedContainer, {
							[b.a.unread]: h
						}),
						O = Object(s.a)(b.a.postEmbedContent, {
							[b.a.deleted]: x || E
						});
					return o.a.createElement("span", {
						className: w
					}, o.a.createElement("span", {
						className: O
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: b.a.postEmbedTitleContainer
					}, n && o.a.createElement(d, {
						className: b.a.WarningIcon
					}), u && o.a.createElement(c, {
						className: b.a.WarningIcon
					}), o.a.createElement("p", {
						className: b.a.postEmbedTitle
					}, g)), o.a.createElement("span", {
						className: b.a.postEmbedMeta
					}, !x && !E && o.a.createElement(o.a.Fragment, null, o.a.createElement(r.b, {
						isScoreHidden: !1,
						score: N,
						useUpvotes: !0
					}), o.a.createElement(r.c, null), Object(r.d)(i)), x && o.a.createElement("span", {
						className: b.a.PostUnavailableInfo
					}, o.a.createElement(m.b, {
						className: b.a.StateIcon
					}), o.a.createElement("span", {
						className: b.a.Text
					}, a.fbt._("Post deleted", null, {
						hk: "1bbVOR"
					}))), E && o.a.createElement("span", {
						className: b.a.PostUnavailableInfo
					}, o.a.createElement(l, {
						className: b.a.StateIcon
					}), o.a.createElement("span", {
						className: b.a.Text
					}, a.fbt._("Post removed", null, {
						hk: "MeMu3"
					}))))), o.a.createElement(f, {
						post: t
					})))
				}
		},
		"./src/reddit/components/NotificationUnit/TopBar.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return p
			}));
			var a = i("./node_modules/react/index.js"),
				n = i.n(a),
				o = i("./src/lib/classNames/index.ts"),
				s = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/timeAgo/index.ts"),
				l = i("./src/reddit/controls/MetaData/index.tsx"),
				d = i("./src/reddit/icons/fonts/index.tsx"),
				c = i("./src/reddit/components/NotificationUnit/index.m.less"),
				m = i.n(c);
			const p = e => {
				const {
					dropdownId: t,
					isHideNotifEligible: i,
					isInTooltip: a,
					isInAppNotification: c,
					isOverflowMenuOpen: p,
					isToggleLowUpdateFromSubredditEligible: u,
					isToggleNotificationUpdateEligible: b,
					isToggleUpdateFromSubredditEligible: f,
					sendInboxClickOverflow: v,
					sentAt: N,
					setActiveOverflowMenuId: g,
					title: h
				} = e, x = (i || b || f || u) && !c, E = Object(o.a)(m.a.menuButton, {
					[m.a.isOpen]: p
				}), w = Date.parse(N) / s.Xb;
				return n.a.createElement("span", {
					className: m.a.topBar
				}, n.a.createElement("span", {
					className: Object(o.a)(m.a.TitleWrapper, {
						[m.a.inAppNotification]: c
					})
				}, n.a.createElement("span", {
					className: Object(o.a)(m.a.title, {
						[m.a["m-tooltip"]]: a,
						[m.a.inAppNotification]: c
					})
				}, h), n.a.createElement(l.c, {
					className: Object(o.a)(m.a.Separator, {
						[m.a.inAppNotification]: c
					})
				}), n.a.createElement("span", {
					className: Object(o.a)(m.a.timeAgo, {
						[m.a.inAppNotification]: c
					})
				}, Object(r.a)(w, !0))), x && n.a.createElement("button", {
					"aria-expanded": p,
					"aria-haspopup": !0,
					className: E,
					id: t,
					onClick: e => {
						e.stopPropagation(), e.preventDefault(), p ? g && g("") : (v && v(), g && g && t && g(t))
					}
				}, n.a.createElement(d.a, {
					name: "overflow_horizontal",
					className: m.a.MenuIcon
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i.n(o),
				r = i("./node_modules/react/index.js"),
				l = i.n(r),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/NotificationUnit/Avatar.tsx"),
				m = i("./src/reddit/components/NotificationUnit/OverflowMenu.tsx"),
				p = i("./src/reddit/components/NotificationUnit/PostEmbed.tsx"),
				u = i("./src/reddit/components/NotificationUnit/TopBar.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				v = i("./src/reddit/models/NotificationInbox/index.ts"),
				N = i("./node_modules/react-redux/es/index.js"),
				g = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/selectors/user.ts"),
				E = i("./src/reddit/components/NotificationUnit/index.m.less"),
				w = i.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(a.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-Button",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!i.m[t]
					},
					importAsync: () => Promise.all([i.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), i.e("reddit-components-NotificationUnit-Button")]).then(i.bind(null, "./src/reddit/components/NotificationUnit/Button.tsx")),
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
				U = "",
				T = .5,
				I = e => {
					var t, i, a, s, E, I, j, _, k, S, y, M;
					const H = Object(f.a)(),
						C = Object(N.d)(),
						D = Object(N.e)(x.fb),
						[B, F] = Object(r.useState)(!1),
						{
							activeOverflowMenuId: P,
							isInboxPostEmbedEnabled: L,
							isInTooltip: R,
							notification: V,
							shouldHideActionButton: z,
							setActiveOverflowMenuId: Z,
							onItemClick: W
						} = e;
					if (!V) return null;
					const {
						avatar: q,
						body: K,
						context: $,
						deeplinkUrl: X,
						isHideNotifEligible: J,
						isToggleLowUpdateFromSubredditEligible: Q,
						isToggleNotificationUpdateEligible: G,
						isToggleUpdateFromSubredditEligible: Y,
						icon: ee,
						id: te,
						readAt: ie,
						sentAt: ae,
						title: ne
					} = V, oe = null == $ ? void 0 : $.messageType, se = null === (i = null === (t = null == $ ? void 0 : $.comment) || void 0 === t ? void 0 : t.parent) || void 0 === i ? void 0 : i.id, re = null === (a = null == $ ? void 0 : $.post) || void 0 === a ? void 0 : a.id, le = null == $ ? void 0 : $.post, de = null === (s = null == $ ? void 0 : $.subreddit) || void 0 === s ? void 0 : s.id, ce = null == $ ? void 0 : $.isBodyHidden, me = null == $ ? void 0 : $.isPostHidden, pe = !ie, ue = `notif-${R?"tooltip":""}-menu-${te}`, be = ue === P, fe = $.messageType === v.a.CommentReply, ve = fe ? se : re, Ne = Object(d.a)(e.className, w.a.notificationItem, {
						[w.a.unread]: pe,
						[w.a.isNightMode]: D
					}), ge = {
						id: te,
						isClicked: !!ie,
						isViewed: !0,
						type: oe
					}, he = $.messageType === v.a.AwardReceived, xe = oe === v.a.LifecyclePostSuggestions, Ee = he ? null === (E = null == $ ? void 0 : $.awarding) || void 0 === E ? void 0 : E.id : "", we = null === (j = null === (I = null == $ ? void 0 : $.awarding) || void 0 === I ? void 0 : I.target) || void 0 === j ? void 0 : j.permalink, Oe = null === (k = null === (_ = null == $ ? void 0 : $.awarding) || void 0 === _ ? void 0 : _.award) || void 0 === k ? void 0 : k.id;
					let Ae = (null === (S = null == $ ? void 0 : $.post) || void 0 === S ? void 0 : S.permalink) || X;
					he && we ? Ae = we : xe && X && (Ae = X);
					const Ue = null === (M = null === (y = null == $ ? void 0 : $.awarding) || void 0 === y ? void 0 : y.awarder) || void 0 === M ? void 0 : M.isAcceptingChats,
						Te = e => {
							H(Object(b.k)({
								...ge,
								actionInfoType: e
							}))
						},
						Ie = e => {
							H(Object(b.B)({
								...ge,
								actionInfoType: e
							}))
						},
						je = () => {
							e.markNotificationAsRead(te, oe)
						},
						_e = e => {
							H(Object(b.i)({
								...ge,
								...e
							}))
						},
						ke = l.a.createElement(l.a.Fragment, null, l.a.createElement(c.a, {
							avatar: q,
							iconType: ee,
							messageType: oe
						}), l.a.createElement("span", {
							className: w.a.contentContainer
						}, l.a.createElement(u.a, {
							dropdownId: ue,
							isHideNotifEligible: J,
							isInTooltip: R,
							isOverflowMenuOpen: be,
							isToggleNotificationUpdateEligible: G,
							isToggleUpdateFromSubredditEligible: Y,
							isToggleLowUpdateFromSubredditEligible: Q,
							sendInboxClickOverflow: () => H(Object(b.j)({
								...ge,
								awardId: Oe
							})),
							sentAt: ae,
							setActiveOverflowMenuId: Z,
							title: ne
						}), L && le && !me && l.a.createElement(p.a, {
							isUnread: pe,
							post: le
						}), (!L || L && !ce) && l.a.createElement("span", {
							className: w.a.body
						}, K), !z && (Ue || he || fe) && l.a.createElement(A, {
							context: $,
							notificationId: te,
							isUnread: pe,
							isFullWidth: R,
							onEvent: _e,
							deeplinkUrl: Ae,
							isNightMode: D
						}))),
						Se = {
							className: w.a.link,
							onClick: e => {
								(null == le ? void 0 : le.removedByCategory) ? (e.preventDefault(), C(Object(g.f)({
									kind: h.b.Error,
									text: o.fbt._("Sorry, this content is no longer available.", null, {
										hk: "3sVhIi"
									}),
									duration: g.a
								}))) : R && W && W(), _e({
									postId: re,
									subredditId: de,
									awardId: Oe,
									position: b.d.FIRST
								})
							},
							onMouseDown: je,
							onKeyDown: je
						};
					return l.a.createElement(l.a.Fragment, null, l.a.createElement("li", {
						className: Ne
					}, l.a.createElement("a", O({}, Se, {
						href: Ae,
						target: "_blank",
						rel: "noopener noreferrer"
					}), ke)), l.a.createElement(m.a, {
						decreaseSubUpdates: () => {
							const t = b.e.DecreaseSubredditUpdates;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(U), de && e.decreaseSubredditNotifications && e.decreaseSubredditNotifications(de, () => Ie(t)), Te(t)
						},
						disableNotificationUpdates: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(U), e.disableNotificationUpdates && e.disableNotificationUpdates(ve), Te(b.e.HideSubreddit)
						},
						hideNotification: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(U), e.hideNotification && e.hideNotification(te), Te(b.e.HideNotifications)
						},
						hideSubredditNotifications: () => {
							const t = b.e.HideSubreddit;
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(U), e.hideSubredditNotifications && e.hideSubredditNotifications(de, () => Ie(t)), Te(t)
						},
						blockAwarder: () => {
							e.isInTooltip && e.setActiveOverflowMenuId && e.setActiveOverflowMenuId(U), e.blockAwarder && e.blockAwarder(Ee), Te(b.e.BlockAwarder)
						},
						isInTooltip: R,
						isHideNotifEligible: J,
						isOpen: be,
						isToggleLowUpdateFromSubredditEligible: Q,
						isToggleNotificationUpdateEligible: G,
						isToggleUpdateFromSubredditEligible: !(!Y || !de),
						isBlockAwarderEligible: he,
						sendInboxViewOverflow: () => H(Object(b.w)(ge)),
						tooltipId: ue
					}), l.a.createElement(n.a, {
						onChange: e => {
							e.isIntersecting && !B && (H(Object(b.v)({
								...ge
							})), F(!0))
						},
						rootMargin: "0px 0px 0px 0px",
						threshold: T
					}, l.a.createElement("div", null)))
				};
			t.default = I
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var a = i("./node_modules/react/index.js"),
				n = i.n(a),
				o = i("./src/higherOrderComponents/asTooltip.tsx"),
				s = i("./src/reddit/constants/elementIds.ts"),
				r = i("./src/reddit/contexts/InsideOverlay.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const i = Object(o.a)(e, t);
				class a extends n.a.PureComponent {
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
						return n.a.createElement(i, l({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(r.b)(a)
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
				return p
			})), i.d(t, "d", (function() {
				return u
			}));
			var a = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				o = i.n(n),
				s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/lib/prettyPrintNumber/index.ts"),
				l = (i("./src/lib/timeAgo/index.ts"), i("./src/reddit/controls/MetaData/index.m.less")),
				d = i.n(l);
			const c = s.a.span("metaText", d.a),
				m = e => o.a.createElement(c, e, " · "),
				p = e => {
					let {
						isScoreHidden: t,
						score: i,
						useUpvotes: n,
						...s
					} = e;
					const l = Object(r.b)(i),
						d = a.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [a.fbt._plural(i, "number", l)], {
							hk: "2L3T21"
						}),
						m = t ? a.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : a.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [a.fbt._plural(i, "number", l)], {
							hk: "gf67v"
						});
					return o.a.createElement(c, s, m)
				},
				u = e => o.a.createElement(c, null, a.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [a.fbt._plural(e, "number", Object(r.b)(e))], {
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
			var a = i("./node_modules/react/index.js"),
				n = i.n(a),
				o = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = i.n(s);
			const l = e => n.a.createElement("svg", {
				className: Object(o.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationUnit.efac6fe0bb5109c5968b.js.map
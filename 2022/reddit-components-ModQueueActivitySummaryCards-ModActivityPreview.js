// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.466ecfbba570eabcbcbc.js
// Retrieved at 10/11/2022, 3:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/higherOrderComponents/asTooltip.tsx"),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				l = s("./node_modules/react/index.js"),
				r = s.n(l),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				v = s("./src/reddit/helpers/graphql/helpers.ts"),
				b = s("./src/reddit/hooks/useGqlContext.ts"),
				p = s("./src/reddit/selectors/modQueue.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				C = s.n(g),
				A = s("./src/config.ts"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				R = s("./src/lib/timeAgo/index.ts"),
				N = s("./src/redditGQL/types.ts");
			const y = `${A.a.assetPath}/img/snoo-sunglasses.png`,
				E = e => {
					let {
						data: t
					} = e;
					var s, o, n, a, l, i, d;
					const u = (null === (s = t.info) || void 0 === s ? void 0 : s.displayName) || (null === (o = t.info) || void 0 === o ? void 0 : o.name),
						{
							lastModAction: m
						} = t;
					return r.a.createElement("div", {
						className: C.a.modRow,
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, r.a.createElement(c.a, {
						className: C.a.modIcon,
						userName: u || "",
						iconUrl: null === (a = null === (n = null == t ? void 0 : t.info) || void 0 === n ? void 0 : n.icon) || void 0 === a ? void 0 : a.url,
						isNSFW: !!(null === (i = null === (l = t.info) || void 0 === l ? void 0 : l.profile) || void 0 === i ? void 0 : i.isNsfw)
					}), r.a.createElement("div", {
						className: C.a.subredditRowText
					}, r.a.createElement("div", {
						className: C.a.username
					}, u), r.a.createElement("div", {
						className: C.a.detailText
					}, m && r.a.createElement(r.a.Fragment, null, ((e, t) => {
						switch (e) {
							case N.s.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case N.s.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case N.s.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case N.s.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case N.s.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case N.s.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case N.s.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case N.s.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case N.s.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case N.s.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case N.s.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case N.s.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case N.s.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case N.s.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case N.s.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case N.s.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case N.s.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case N.s.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case N.s.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case N.s.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case N.s.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case N.s.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case N.s.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case N.s.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case N.s.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case N.s.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case N.s.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case N.s.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case N.s.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case N.s.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case N.s.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case N.s.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case N.s.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case N.s.UpdateRemovalReason:
							case N.s.WikiBanned:
							case N.s.WikiContributor:
							case N.s.WikiPageListed:
							case N.s.WikiPermLevel:
							case N.s.WikiRevise:
							case N.s.WikiUnbanned:
							case N.s.AcceptModeratorInvite:
							case N.s.AddCommunityTopics:
							case N.s.AddContributor:
							case N.s.AddModerator:
							case N.s.CreateAward:
							case N.s.CreateScheduledPost:
							case N.s.CreateRemovalReason:
							case N.s.CommunityStyling:
							case N.s.CommunityWidgets:
							case N.s.CreateRule:
							case N.s.DeleteAward:
							case N.s.DeleteRule:
							case N.s.DeleteScheduledPost:
							case N.s.DeleteOverriddenClassification:
							case N.s.DeleteRemovalReason:
							case N.s.DisableAward:
							case N.s.EditPostRequirements:
							case N.s.EditRule:
							case N.s.EditScheduledPost:
							case N.s.EditSettings:
							case N.s.EnableAward:
							case N.s.Events:
							case N.s.HiddenAward:
							case N.s.InviteModerator:
							case N.s.InviteSubscriber:
							case N.s.ModAwardGiven:
							case N.s.ModmailEnrollment:
							case N.s.OverrideClassification:
							case N.s.RemoveCommunityTopics:
							case N.s.RemoveContributor:
							case N.s.RemoveModerator:
							case N.s.RemoveWikiContributor:
							case N.s.ReorderModerators:
							case N.s.ReorderRules:
							case N.s.SetPermissions:
							case N.s.SnoozeReports:
							case N.s.SubmitContentRatingSurvey:
							case N.s.SubmitScheduledPost:
							case N.s.UnignoreReports:
							case N.s.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == m ? void 0 : m.action, null === (d = null == m ? void 0 : m.target) || void 0 === d ? void 0 : d.__typename), " ", Object(R.d)(Object(v.g)(m.createdAt) / 1e3)))))
				},
				w = e => {
					let {
						mostRecentAction: t
					} = e;
					return r.a.createElement("div", {
						className: C.a.emptyTooltip
					}, r.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: y,
						className: C.a.snooImage
					}), r.a.createElement("div", {
						className: C.a.emptyText
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), r.a.createElement("div", {
						className: C.a.emptyDetailText
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && r.a.createElement("div", {
						className: C.a.lastActionContainer
					}, r.a.createElement("div", {
						className: C.a.lastActionTitle
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), r.a.createElement(E, {
						data: t
					})))
				},
				j = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: o,
						mostRecentAction: a
					} = e;
					return 0 === t.length ? r.a.createElement(w, {
						mostRecentAction: a
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: C.a.tooltipTitle
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), o && t.slice(0, 10).map(e => r.a.createElement(E, {
						data: o[e],
						key: e
					})), t.length > 10 && r.a.createElement("div", {
						className: Object(n.a)(C.a.detailText, C.a.more)
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				P = Object(o.a)(u.a),
				O = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var o, n, a, l;
					const r = null === (n = null === (o = s[e]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt,
						i = null === (l = null === (a = s[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === l ? void 0 : l.createdAt,
						d = Object(v.g)(r || "");
					return Object(v.g)(i || "") - d
				})(t, s, e)).filter(t => {
					var s, o;
					return (new Date).getTime() - Object(v.g)((null === (o = null === (s = e[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === o ? void 0 : o.createdAt) || "") < 15 * a.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: o
				} = e;
				const a = Object(i.e)(h.c),
					u = s || a,
					v = Object(i.e)(e => Object(_.h)(e, {
						subredditId: u || ""
					})),
					g = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[u || ""]) || {}
					}),
					{
						mods: A
					} = g,
					S = Object(l.useCallback)(e => O(e), [])(A),
					[R, N] = Object(l.useState)(void 0),
					y = Object(b.a)();
				Object(l.useEffect)(() => {
					(async () => {
						var e, t, s, o;
						if (0 === S.length && v) {
							const n = null === (t = null === (e = (await Object(m.a)(y(), {
								subredditName: v
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == n ? void 0 : n.actions) && (null === (o = null === (s = n.actions) || void 0 === s ? void 0 : s.edges) || void 0 === o || o.map(e => {
								const {
									moderatorInfo: t,
									...s
								} = null == e ? void 0 : e.node;
								"reddit" !== (null == t ? void 0 : t.name) && "automoderator" !== (null == t ? void 0 : t.name) && N({
									info: t,
									lastModAction: s
								})
							}))
						}
					})()
				}, [y, S.length, v]);
				const E = (e => `mod_activity_tooltip_id-${e}`)(v || ""),
					w = Object(i.d)(),
					D = Object(l.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), w(Object(d.h)({
							tooltipId: E
						}))
					}, [w, E]),
					x = Object(i.e)(e => Object(k.b)(E)(e)),
					M = Object(i.e)(p.d),
					U = Object(i.e)(f.k),
					L = o || 5;
				return r.a.createElement("div", {
					className: Object(n.a)(C.a.preview, t),
					id: E,
					onClick: D,
					"data-testid": "mod-activity-preview"
				}, A && S.length > 0 ? S.slice(0, L).map((e, t) => {
					var s, o, a, l, i, d, u, m, v, b;
					return r.a.createElement(c.a, {
						className: Object(n.a)(C.a.userIcon, {
							[C.a.noMargin]: t === S.length - 1 && !(t === L - 1 && S.length > L)
						}),
						key: null === (o = null === (s = A[e]) || void 0 === s ? void 0 : s.info) || void 0 === o ? void 0 : o.displayName,
						userName: (null === (l = null === (a = A[e]) || void 0 === a ? void 0 : a.info) || void 0 === l ? void 0 : l.displayName) || "",
						iconUrl: null === (u = null === (d = null === (i = A[e]) || void 0 === i ? void 0 : i.info) || void 0 === d ? void 0 : d.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (v = null === (m = A[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : M ? null : r.a.createElement(c.a, {
					className: Object(n.a)(C.a.userIcon, C.a.noMargin),
					userName: (null == U ? void 0 : U.displayName) || "",
					iconUrl: null == U ? void 0 : U.accountIcon,
					isNSFW: !1
				}), S.length > L && r.a.createElement("div", {
					className: C.a.moreMods
				}, "+", S.length - L), r.a.createElement(P, {
					tooltipId: E,
					isOpen: x,
					className: C.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, r.a.createElement(j, {
					orderedModsList: S,
					subredditName: v || "",
					mods: A,
					mostRecentAction: R
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.466ecfbba570eabcbcbc.js.map